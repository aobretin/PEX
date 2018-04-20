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
  date
} from 'yup';
// 
// export const DEMO_QUERY_SCHEMA = {
//   GET_USERS: {
//     url: URLS.USERS.GET_USERS,
//     method: 'get',
//     schema: array().of(
//       object().shape(
//         {
//           userId: number().required(),
//           name: string().required(),
//           username: string().required(),
//           email: string().required(),
//           address: object().shape(
//             {
//               street: string().required()
//             }
//           ).required(),
//           phone: string().required()
//         }
//       )
//     ),
//     query: `res.data[].{
//       userId: id,
//       name: name,
//       username: username,
//       email: email,
//       address: {
//         street: address.street
//       },
//       phone: phone
//     }`
//   },
//   GET_USER: {
//     url: URLS.USERS.GET_USER,
//     method: 'get',
//     schema: object().shape(
//       {
//         userId: number().required(),
//         name: string().required(),
//         username: string().required(),
//         email: string().required(),
//         address: object().shape(
//           {
//             street: string().required(),
//             suite: string().required(),
//             city: string().required(),
//             zipcode: string().required(),
//             location: object().shape(
//               {
//                 latitude: string().required(),
//                 longitude: string().required()
//               }
//             ).required()
//           }
//         ).required(),
//         phone: string().required()
//       }
//     ),
//     query: `res.data.{
//       userId: id,
//       name: name,
//       username: username,
//       email: email,
//       address: {
//         street: address.street,
//         suite: address.suite,
//         city: address.city,
//         zipcode: address.zipcode,
//         location: {
//           latitude: address.geo.lat,
//           longitude: address.geo.lng
//         }
//       },
//       phone: phone
//     }`
//   }
// }
