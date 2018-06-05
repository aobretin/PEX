import {
  buildModuleAliases,
  getTimeDiff
} from 'helpers'

import {
  makeNameAbbv
} from 'filters';

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
  DASHBOARD_WRAPPER._TASKLIST
)

export default {
  name: MODULE_NAME,
  methods: {

  },
  computed: {

  },
  props: {

  },
  filters: {
    
  }
}
