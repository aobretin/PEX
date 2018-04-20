import MyParties from 'pages/My-parties';

export default [
  {
    path: '/',
    component: MyParties
  },
  // default redirect (could be a 404)
  {
    path: '*',
    redirect: '/'
  }
]
