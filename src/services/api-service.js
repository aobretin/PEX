import Axios, {CancelToken} from 'axios';
import Qs from 'qs';

import {cherryPick} from 'helpers';
import {URLS} from 'CONSTANTS';

const {
  BASE_URL: baseURL
} = URLS;

export const req = async args => {
  let processedUrl = '';

  const {
    REQUEST: {
      url,
      query,
      schema,
      method = 'get'
    },
    data = null,
    params = null,
    appendUrl = {traditional: false},
    headers = {'Content-Type': 'application/x-www-form-urlencoded'},
    ...otherParams
  } = args;
  const {
    traditional,
    ...urlParams
  } = appendUrl;
  const paramsSerializer = params => Qs.stringify(params, {arrayFormat: 'brackets'});

  if (Object.keys(urlParams).length) {
    if (traditional) {
      processedUrl = Object.entries(urlParams).reduce((soFarUrl, currentEntry, i) => {
        const [
          key,
          value
        ] = currentEntry;

        return i === 0 ? `${url}?${key}=${value}` : `${soFarUrl}&${key}=${value}`;
      }, '');
    } else {
      processedUrl = `${url}/${[...Object.values(urlParams)].join('/')}`;
    }
  } else {
    processedUrl = url;
  }

  const res = await Axios.request({
    url: processedUrl,
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
