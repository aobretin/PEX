import types from './mutation_types';

const  {
  MODIFY_ADDRESS_BOOK_USERS
} = types;

const modifyAddressBookUsers = (context, addressBookUsers) => {
  const {
    commit
  } = context;

  commit(MODIFY_ADDRESS_BOOK_USERS, addressBookUsers);
}

export default {
  modifyAddressBookUsers
}
