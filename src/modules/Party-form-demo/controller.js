import {
  buildModuleAliases
} from 'helpers';

import Service from './service';

import {
  GLOBAL_NAMES,
  FORMS
} from 'CONSTANTS';

const {
  MODULES_NAMES: {
    PARTY_FORM_DEMO
  }
} = GLOBAL_NAMES;

const {
  PARTY_FORM
} = FORMS;

const {
  MODULE_NAME
} = buildModuleAliases(
  PARTY_FORM_DEMO,
)

export default {
  name: MODULE_NAME,
  data() {
    return {
      partyDemoData: {...PARTY_FORM.values},
      options: [
        {
          value: '',
          text: 'Choose...'
        },
        {
          value: 'v1',
          text: 'Version 1'
        },
        {
          value: 'v2',
          text: 'Version 2'
        }
      ]
    }
  },
  validations: {
    partyDemoData: {...PARTY_FORM.validations}
  },
  methods: {
    submit() {
      this.$router.push({
        name: 'Dashboard',
        params: {
          partyId: 5
        }
      })
    },
    c() {
      console.log('update');
    },
    fetchReq(q, cb) {
      fetch(`https://api.github.com/search/repositories?q=${q}`)
        .then(res => res.json())
        .then(res => cb(res.items))
    },
    setNewValue({id}) {
      this.partyDemoData.auto = id;
    }
  },
  mounted() {
    if (this.partyId) {
      this.partyDemoData = {
        data0: 'Party5',
        data1: 'v1',
        data2: 'Alex',
        data3: true,
        radioVal: 'cat'
      }
    }
  },
  props: {
    partyId: {
      type: [
        Number,
        String
      ]
    },
    duplicate: {
      type: Boolean,
      default: false
    }
  }
}
