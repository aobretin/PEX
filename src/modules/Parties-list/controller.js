import {mapGetters, mapActions} from 'vuex';

import {
  buildModuleAliases
} from 'helpers';

import Service from './service';
import store from './store';

const {
  MODULE_NAME
} = buildModuleAliases(
  'Homepage'
)

export default {
  name: MODULE_NAME,
  computed: {
    ...mapGetters({
    })
  },
  methods: {
    ...mapActions({
    })
  },
  created() {
    this.service = new Service();

    if (!this.$store.state[MODULE_NAME]) {
      this.$store.registerModule(MODULE_NAME, store);
    }
  },
}
