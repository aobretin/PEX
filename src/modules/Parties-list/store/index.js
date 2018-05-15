import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  parties: {
    upcoming: [
      {
        name: 'Cool party1',
        startDate: '2018-10-20',
        startTime: '08:00',
        host: 'Sophie Ranier',
        status: '0'
      }
    ],
    ongoing: [

    ],
    previous: [
      {
        name: 'Cool party2',
        startDate: '2018-05-20',
        startTime: '08:00',
        host: 'Sophie Ranier',
        status: '1'
      }
    ]
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
