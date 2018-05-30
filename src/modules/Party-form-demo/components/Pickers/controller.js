import {
  buildModuleAliases
} from 'helpers'

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

const {
  MODULES_NAMES: {
    PARTY_FORM_DEMO
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  PARTY_FORM_DEMO._PICKERS
)

export default {
  name: MODULE_NAME,
  methods: {

  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    validations: {
      type: Object,
      default: () => {}
    }
  }
}
