import {
  buildModuleAliases
} from 'helpers';

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

const {
  MODULES_NAMES: {
    DASHBOARD_WRAPPER
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  DASHBOARD_WRAPPER._PARTY_STATISTICS
)

export default {
  name: MODULE_NAME,
  methods: {

  },
  computed: {

  },
  props: {
    loaded: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
