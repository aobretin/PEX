import {buildModuleAliases} from 'helpers';

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    INPUT_GENERATOR
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(INPUT_GENERATOR);

export default {
  name: MODULE_NAME,
  data() {
    return {
      scopeName: null,
      isCheckOrRadio: this.inputType === 'checkbox' || this.inputType === 'radio'
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
        this.update(v);
      }
    }
  },
  methods: {
    update(v) {
      this.customCallback(v);
    }
  },
  beforeDestroy() {
    this.$off();
  },
  props: {
    input: {
      type: String,
      default: 'input'
    },
    inputName: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    inputType: {
      type: String
    },
    inputLabel: {
      type: String
    },
    inputPlaceholder: {
      type: String
    },
    inputClass: {
      type: String
    },
    inputParentClass: {
      type: [
        String,
        Object
      ]
    },
    customCallback: {
      type: Function,
      default: () => {}
    },
    checkRadioValue: {
      type: String,
      default: ''
    },
    validations: {
      type: Object,
      default: () => {}
    },

    styles: {
      type: Object,
      default: () => {}
    }
  }
}
