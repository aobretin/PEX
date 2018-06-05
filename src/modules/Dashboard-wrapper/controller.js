import {mapGetters, mapActions} from 'vuex';

import {
  buildModuleAliases
} from 'helpers';

import {
  GLOBAL_NAMES,
  PARTIES_MOCK_SCHEMA,
  USERS_MOCK_SCHEMA
} from 'CONSTANTS';

import Service from './service';
import store from './store';

import HostDetails from './components/Host-details';
import PartyStatistics from './components/Party-statistics';
import Tasklist from './components/Tasklist';

const {
  MODULES_NAMES: {
    DASHBOARD_WRAPPER
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME,
  party,
  loaded,
  modifyParty,
  modifyLoaded
} = buildModuleAliases(
  DASHBOARD_WRAPPER.name,
  'party',
  'loaded',
  'modifyParty',
  'modifyLoaded'
)

const {
  GET_PARTIES
} = PARTIES_MOCK_SCHEMA;

const {
  GET_USERS
} = USERS_MOCK_SCHEMA;

export default {
  name: MODULE_NAME,
  computed: {
    ...mapGetters({
      party,
      loaded
    })
  },
  methods: {
    ...mapActions({
      modifyParty,
      modifyLoaded
    })
  },
  created() {
    this.service = new Service();

    if (!this.$store.state[MODULE_NAME]) {
      this.$store.registerModule(MODULE_NAME, store);
    }
  },
  async mounted() {
    // this.service.q({
    //   parties: {
    //     REQUEST: GET_PARTIES,
    //     appendUrl: {
    //       id: this.partyId
    //     }
    //   },
    //   users: {
    //     REQUEST: GET_USERS
    //   }
    // }).then(res => {
    //   console.log(res);
    // })

    const [party] = await this.service.req(GET_PARTIES, {
      appendUrl: {
        id: this.partyId
      }
    });

    const [host] = await this.service.req(GET_USERS, {
      appendUrl: {
        id: party.hostId
      }
    });

    this.$store.dispatch(modifyParty, {
      ...party,
      host
    });

    this.$store.dispatch(modifyLoaded, true);
  },
  props: {
    partyId: {
      type: String
    }
  },
  components: {
    HostDetails,
    PartyStatistics,
    Tasklist
  }
}
