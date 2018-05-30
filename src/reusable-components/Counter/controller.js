import {buildModuleAliases} from 'helpers';

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    COUNTER
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(COUNTER)

export default {
  name: MODULE_NAME,
  props: {
    numbers: {
      type: Array,
      default: () => [],
      required: true
    },
    after: {
      type: Array,
      default: () => []
    },
    connector: {
      type: String,
      default: ':'
    },
    formatter: {
      type: Function,
      default: (num) => {
        return num >= 10 ? parseInt(num) : `0${parseInt(num)}`;
      }
    },
    time: {
      type: Number,
      default: 1500
    }
  }
}
