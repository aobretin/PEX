import types from './mutation_types';

const  {
  MODIFY_ADDRESS_BOOK_USERS
} = types;

export default {
  [MODIFY_ADDRESS_BOOK_USERS](state, addressBookUsers = []) {
    state.addressBookUsers = [...addressBookUsers]
  }
}
