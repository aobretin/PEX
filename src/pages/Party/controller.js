import moment from 'moment';

import {
  buildModuleAliases
} from 'helpers';

import {
  GLOBAL_NAMES
} from 'CONSTANTS';

const {
  PAGES_NAMES: {
    PARTY
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(
  PARTY
)

export default {
  name: MODULE_NAME,
  data() {
    const {
      options: {
        routes
      }
    } = this.$router;
    const {
      children
    } = routes.find(route => route.name === PARTY);

    return {
      partyRoutes: children.slice(0, children.length - 1)
    }
  }
}
