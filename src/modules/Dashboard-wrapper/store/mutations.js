import types from './mutation_types';

const  {
  MODIFY_PARTY,
  MODIFY_LOADED
} = types;

export default {
  [MODIFY_PARTY](state, party = {}) {
    state.party = {...party}
  },
  [MODIFY_LOADED](state, loaded = false) {
    state.loaded = loaded;
  }
}
