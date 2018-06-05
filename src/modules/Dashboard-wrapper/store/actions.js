import types from './mutation_types';

const  {
  MODIFY_PARTY,
  MODIFY_LOADED
} = types;

const modifyParty = (context, party) => {
  const {
    commit
  } = context;

  commit(MODIFY_PARTY, party);
}

const modifyLoaded = (context, loaded) => {
  const {
    commit
  } = context;

  commit(MODIFY_LOADED, loaded);
}

export default {
  modifyParty,
  modifyLoaded
}
