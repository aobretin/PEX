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
  DASHBOARD_WRAPPER._HOST_DETAILS
)

export default {
  name: MODULE_NAME,
  methods: {
    getTimeDiff,
    editParty(id) {
      this.$router.push({
        name: 'PartyForm',
        params: {
          partyId: id
        }
      })
    }
  },
  computed: {
    hostName() {
      const {
        firstName,
        lastName
      } = this.party.host;

      return `${firstName} ${lastName}`;
    }
  },
  props: {
    party: {
      type: Object,
      required: true,
      default: () => {
        host: {}
      }
    },
    loaded: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  filters: {
    makeNameAbbv
  }
}
