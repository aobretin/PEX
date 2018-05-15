import {
  buildModuleAliases
} from 'helpers'

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  COMPONENTS_NAMES: {
    _PARTY_LIST
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  _PARTY_LIST
)

export default {
  name: MODULE_NAME,
  methods: {
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
  }
}
