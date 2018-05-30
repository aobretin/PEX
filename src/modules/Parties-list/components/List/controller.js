import {
  buildModuleAliases
} from 'helpers'

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

import {
  convertToPartyTime
} from 'filters';

import {
  checkIfDateBefore,
  getTimeDiff,
  getPartyStatus
} from 'helpers';

const {
  MODULES_NAMES: {
    PARTIES_LIST
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  PARTIES_LIST._PARTY_LIST
)

export default {
  name: MODULE_NAME,
  methods: {
    checkIfDateBefore,
    getTimeDiff,
    getPartyStatus
  },
  props: {
    title: {
      type: String,
      default: 'Upcoming parties'
    },
    parties: {
      type: Array,
      default: () => []
    }
  },
  filters: {
    convertToPartyTime
  }
}
