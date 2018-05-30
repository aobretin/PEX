import {buildModuleAliases} from 'helpers';

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    DIALOG_GENERATOR
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(DIALOG_GENERATOR)

export default {
  name: MODULE_NAME,
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    closeModal: {
      type: Function,
      default: () => {},
      required: true
    },
    title: {
      type: String
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: false
    },
    closeOnClick: {
      type: Boolean,
      default: false
    },
    closeOnEsc: {
      type: Boolean,
      default: false
    },
    customClass: {},
    width: {}
  }
}
