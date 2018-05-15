import {mapGetters, mapActions} from 'vuex';

import {GLOBAL_NAMES} from 'CONSTANTS';

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
  MODULE_NAME,
  parties,
  modifyParties
} = buildModuleAliases(
  PARTIES_LIST,
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
  components: {
    plist: List
  }
}
