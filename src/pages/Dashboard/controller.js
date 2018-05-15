import moment from 'moment';

import {
  buildModuleAliases
} from 'helpers';

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

const {
  PAGES_NAMES: {
    DASHBOARD
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  DASHBOARD
)

export default {
  name: MODULE_NAME
}
