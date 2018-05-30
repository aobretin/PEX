import {buildModuleAliases} from 'helpers';
import {mixin as clickaway} from 'vue-clickaway';

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    SELECT_GENERATOR
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(SELECT_GENERATOR);

export default {
  name: MODULE_NAME,
  mixins: [clickaway],
  data() {
    return {
      opened: false,
      processedOptions: []
    }
  },
  computed: {
    showValue() {
      const {
        key
      } = this.optionsKeyText;

      if (this.processedOptions.length === 1) {
        this.update(this.processedOptions[0]);
        return this.processedOptions[0];
      }

      return this.processedOptions.find(opt => opt[key] === this.value);
    },
    disabledNeeded() {
      return this.disabled || this.processedOptions.length === 1;
    }
  },
  methods: {
    toggleSelect(value) {
      if (this.disabledNeeded) return false;

      if (typeof value !== 'boolean') value = false;
      this.opened = value;
    },
    update(opt) {
      const {
        key
      } = this.optionsKeyText;

      this.customCallback(opt);
      this.$emit('input', opt[key]);
    }
  },
  created() {
    let items = [];

    this.options.reduce((currentCollection, currentItem) => {
      if (!this._.isPlainObject(currentItem)) {
        items.push({
          [this.optionsKeyText.key]: currentItem,
          [this.optionsKeyText.text]: currentItem
        });

        return items;
      } else {
        items.push(currentItem);
      }
    }, items);

    this.processedOptions = [...items];
  },
  beforeDestroy() {
    this.$off();
  },
  props: {
    selectName: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    selectLabel: {
      type: String
    },
    selectClass: {
      type: String
    },
    selectParentClass: {
      type: String
    },
    customCallback: {
      type: Function,
      default: () => {}
    },
    validations: {
      type: Object,
      default: () => {}
    },
    options: {
      type: Array,
      default: () => {
        const {
          text,
          key
        } = this.a.props.optionsKeyText.default();

        return [{
          [text]: 'No options available...',
          [key]: ''
        }]
      }
    },
    optionsKeyText: {
      type: Object,
      default: () => ({
        key: 'value',
        text: 'text'
      })
    },
    disabled: {
      type: Boolean,
      default: false
    },

    styles: {
      type: Object,
      default: () => {}
    }
  }
}
