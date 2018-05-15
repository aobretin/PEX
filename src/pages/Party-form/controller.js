import {
  buildModuleAliases
} from 'helpers';

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

const {
  PAGES_NAMES: {
    PARTY_FORM
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  PARTY_FORM
)

export default {
  name: MODULE_NAME
}
