import {GLOBAL_NAMES} from 'CONSTANTS';

import {
  buildModuleAliases
} from 'helpers';

import Service from './service';
import store from './store';

const {
  APP_NAME
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  APP_NAME
)

export default {
  name: MODULE_NAME
}
