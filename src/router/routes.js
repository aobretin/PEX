import MyParties from 'pages/My-parties';
import PartyForm from 'pages/Party-form';
import Party from 'pages/Party';
import Dashboard from 'pages/Dashboard';
import Guestlist from 'pages/Guestlist';

export default [
  {
    name: 'MyParties',
    path: '/',
    component: MyParties
  },
  {
    name: 'PartyForm',
    path: '/party-form/:partyId?',
    component: PartyForm
  },
  {
    name: 'Party',
    path: '/party/:partyId',
    component: Party,
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: Dashboard
      },
      {
        name: 'Guestlist',
        path: 'guestlist',
        component: Guestlist
      },
      {
        path: '*',
        redirect: 'dashboard'
      }
    ]
  },
  // default redirect (could be a 404)
  {
    path: '*',
    redirect: '/'
  }
]
