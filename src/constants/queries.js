import {
  URLS
} from './urls';

import {
  mixed,
  object,
  boolean,
  array,
  string,
  number,
  date,
  lazy
} from 'yup';

export const PARTIES_MOCK_SCHEMA = {
  GET_PARTIES: {
    url: URLS.PARTIES.GET_PARTIES,
    method: 'get',
    schema: array().of(
      object().shape(
        {
          name: string().required(),
          startDate: string().required(),
          startTime: mixed(),
          host: string().required(),
          status: string().required(),
          partyStatus: string().required(),
          transfered: mixed()
        }
      )
    ),
    query: `res.data[].{
        name: name,
        startDate: startDate,
        startTime: startTime,
        host: host,
        status: status,
        partyStatus: partyStatus,
        transfered: transfered
    }`
  }
}

export const ADDRESS_BOOK_USERS_MOCK = {
  GET_USERS: {
    url: URLS.ADDRESS_BOOK.GET_USERS,
    method: 'get',
    schema: array().of(
      object().shape(
        {
          firstName: string().required(),
          lastName: string().required(),
          address: mixed().concat(
            string(),
            array()
          ).required(),
          email: string(),
          phone: mixed(),
          social: mixed()
        }
      )
    ),
    query: `res.data[].{
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        phone: phone,
        social: social
    }`
  }
}
