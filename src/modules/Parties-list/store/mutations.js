import types from './mutation_types';

const  {
  MODIFY_PARTIES
} = types;

export default {
  [MODIFY_PARTIES](state, parties = {}) {
    state.parties = {...parties}
  }
}
