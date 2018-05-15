import {buildModuleAliases} from 'helpers';

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    AUTOCOMPLETE_GENERATOR
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(AUTOCOMPLETE_GENERATOR);

export default {
  name: MODULE_NAME,
  data() {
    return {
      scopeName: null,
      autocompleteValue: ''
    }
  },
  methods: {
    changeValue(item) {
      setTimeout(() => {
        this.setSelectedValue(item);
      });
    }
  },
  props: {
    value: {
      required: true
    },
    autocompleteName: {
      type: String,
      required: true
    },
    autocompleteLabel: {
      type: String
    },
    autocompleteParentClass: {
      type: String
    },
    autocompleteHint: {
      type: String
    },
    displayKey: {
      type: String,
      default: 'id'
    },
    validations: {
      type: [Object, String],
      default: () => {}
    },
    // fetch and set
    queryFunc: {
      type: Function,
      required: true,
      default: () => {
        return (query, cb) => cb([]);
      }
    },
    setSelectedValue: {
      type: Function,
      required: true,
      default: () => {}
    },

    styles: {
      type: Object,
      default: () => {}
    }
  }
}
