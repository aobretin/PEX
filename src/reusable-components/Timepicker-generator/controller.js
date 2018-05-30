import moment from 'moment';
import {buildModuleAliases} from 'helpers';
import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    TIMEPICKER_GENERATOR
  },
  DATES_FORMATS: {
    TIME_DEFAULT,
    TIME_CONFIG,
    TIME_SHOW_FORMAT
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(TIMEPICKER_GENERATOR);

export default {
  name: MODULE_NAME,
  data() {
    return {
      timePlaceholder: TIME_SHOW_FORMAT
    }
  },
  computed: {
    currentTime: {
      get() {
        return this.value;
      },
      set(time) {
        const {
          timeName
        } = this;

        this.$emit('input', time);
        this.$root.$emit('timeChanged', {
          time,
          timeName
        });
      }
    }
  },
  beforeDestroy() {
    this.$off();
  },
  created() {
    this.$root.$on('timeChanged', e => {
      const {
        time: dependencyValue,
        timeName: dependencyTime
      } = e;

      if (this.dependency === dependencyTime) {
        this.$refs[this.timeName].pickerVisible = true;
      }
    });
  },
  props: {
    value: {
      required: true,
      default: TIME_DEFAULT
    },
    timeConfig: {
      type: Object,
      default: () => TIME_CONFIG
    },
    timeName: {
      type: String,
      required: true
    },
    timeParentClass: {
      type: String
    },
    timeLabel: {
      type: String
    },
    dependency: {
      type: String
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
