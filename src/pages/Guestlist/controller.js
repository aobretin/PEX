import moment from 'moment';

import {
  buildModuleAliases
} from 'helpers';

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

const {
  PAGES_NAMES: {
    GUESTLIST
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  GUESTLIST
)

export default {
  name: MODULE_NAME
}
