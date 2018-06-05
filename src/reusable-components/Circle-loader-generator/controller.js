import {buildModuleAliases} from 'helpers';

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    CIRCLE_LOADER_GENERATOR
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(CIRCLE_LOADER_GENERATOR)

export default {
  name: MODULE_NAME,
  props: {
    progress: {
      type: Number,
      required: true,
      default: 100
    },
    size: {
      type: Number,
      default: 200
    },
    emptyFill: {
      default: '#ededed'
    },
    fill: {
      default: () => ({
        gradient: [
          "#f874cb",
          "#b48ef3"
        ],
        gradientAngle: "135"
      })
    }
  }
}
