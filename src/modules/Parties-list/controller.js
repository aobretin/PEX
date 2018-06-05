import {mapGetters, mapActions} from 'vuex';
import moment from 'moment';

import {
  GLOBAL_NAMES,
  PARTIES_MOCK_SCHEMA
} from 'CONSTANTS';

import {
  buildModuleAliases
} from 'helpers';

import Service from './service';
import store from './store';

import List from './components/List';

const {
  MODULES_NAMES: {
    PARTIES_LIST
  }
} = GLOBAL_NAMES;

const {
  GET_PARTIES
} = PARTIES_MOCK_SCHEMA;

const {
  MODULE_NAME,
  parties,
  modifyParties
} = buildModuleAliases(
  PARTIES_LIST.name,
  'parties',
  'modifyParties'
)

export default {
  name: MODULE_NAME,
  computed: {
    ...mapGetters({
      parties
    })
  },
  methods: {
    ...mapActions({
      modifyParties
    })
  },
  created() {
    this.service = new Service();

    if (!this.$store.state[MODULE_NAME]) {
      this.$store.registerModule(MODULE_NAME, store);
    }
  },
  mounted() {
    this.service.req(GET_PARTIES).then(bulkParties => {
      let parties = {
        upcoming: [],
        ongoing: [],
        previous: []
      };

      bulkParties.reduce((currentCollection, currentParty) => {
        const {
          status
        } = currentParty;

        let partyType = '';

        switch (status) {
          case '1':
            partyType = 'upcoming';
            break;
          case '0':
            partyType = 'ongoing';
            break;
          case '2':
            partyType = 'previous';
            break;
        }

        currentCollection[partyType].unshift(currentParty);

        return currentCollection;
      }, parties);

      this.$store.dispatch(modifyParties, parties);
    }).catch(() => {
      this.$store.dispatch(modifyParties, parties);
    });
  },
  components: {
    plist: List
  }
}
