import types from './mutation_types';

const  {
  MODIFY_PARTIES
} = types;

const modifyParties = (context, parties) => {
  const {
    commit
  } = context;

  commit(MODIFY_PARTIES, parties);
}

export default {
  modifyParties
}
