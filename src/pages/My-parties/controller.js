import moment from 'moment';

import {
  buildModuleAliases
} from 'helpers';

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

const {
  PAGES_NAMES: {
    MY_PARTIES
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  MY_PARTIES
)

export default {
  name: MODULE_NAME
}
