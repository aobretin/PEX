import Axios, {CancelToken} from 'axios';
import Qs from 'qs';

import {cherryPick} from 'helpers';
import {URLS} from 'CONSTANTS';

const {
  BASE_URL: baseURL
} = URLS;

export const req = async args => {
  const {
    REQUEST: {
      url,
      query,
      schema,
      method = 'get'
    },
    data = null,
    params = null,
    appendUrl = {},
    headers = {'Content-Type': 'application/x-www-form-urlencoded'},
    ...otherParams
  } = args,
    paramsSerializer = params => Qs.stringify(params, {arrayFormat: 'brackets'});

  const res = await Axios.request({
    url: `${url}${Object.keys(appendUrl).length ? '/' + [...Object.values(appendUrl)].join('/') : ''}`,
    baseURL,
    method,
    headers,
    params,
    data,
    paramsSerializer,
    ...otherParams
  });

  const processedResponse = cherryPick({res}, query);

  return await schema.validate(processedResponse, {
    // options here
    strict: true
  })
  .then(isValidResponse => isValidResponse)
  .catch(error => {
    const {
      value,
      errors: [errorToPrint]
    } = error;

    throw new TypeError(`${errorToPrint} with the value ${JSON.stringify(value)}`);

    return value;
  });
}

export const q = async requests => {
  const requestsKeys = Object.keys(requests);
  const processedResponses = await Axios.all(requestsKeys.map(key => req(requests[key])));

  return requestsKeys.reduce((responsesCollection, currentResponse, i) => {
    return {
      ...responsesCollection,
      [currentResponse]: processedResponses[i]
    }
  }, {});
}
