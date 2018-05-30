import moment from 'moment';

import {buildModuleAliases} from 'helpers';

import {GLOBAL_NAMES} from 'CONSTANTS';

const {
  REUSABLES: {
    DATEPICKER_GENERATOR
  },
  DATES_FORMATS: {
    SHOW_FORMAT,
    ISO_FORMAT
  }
} = GLOBAL_NAMES;

const {
  MODULE_NAME
} = buildModuleAliases(DATEPICKER_GENERATOR);

export default {
  name: MODULE_NAME,
  data() {
    return {
      placeholderFormat: SHOW_FORMAT.toUpperCase(),
      disabledDates: {}
    }
  },
  computed: {
    computedDisabledDates: {
      get() {
        return this.disabledDates;
      },
      set(config) {
        this.disabledDates = {...config};
      }
    }
  },
  beforeDestroy() {
    this.$off();
  },
  created() {
    let firstRender = true;
    this.computedDisabledDates = {...this.disabledDatesConfig};

    this.$root.$on('dateChanged', e => {
      const {
        v: dependencyValue,
        dateName: dependencyDate
      } = e;

      if (this.dependency === dependencyDate) {
        this.computedDisabledDates = {
          disabledDate(time) {
            return moment(time).add('days', 1).isSameOrBefore(dependencyValue);
          }
        };

        if (!firstRender && this.$refs[this.dateName]) {
          this.$refs[this.dateName].pickerVisible = true;
        }

        if (moment(this.value).isSameOrBefore(dependencyValue)) {
          this.$emit('input', moment(dependencyValue).format(ISO_FORMAT));
        }

        firstRender = false;
      }
    });

    setTimeout(() => {
      const {
        value: v,
        dateName
      } = this;

      this.$root.$emit('dateChanged', {
        v,
        dateName
      });
    });
  },
  methods: {
    openDatepicker() {
      this.$refs[this.dateName].pickerVisible = true;
    },
    update(v) {
      const {
        dateName
      } = this;

      this.customCallback();
      this.$emit('input', moment(v).format(ISO_FORMAT));
      this.$root.$emit('dateChanged', {
        v,
        dateName
      });
    }
  },
  props: {
    value: {
      type: [
        Object,
        String,
        Date
      ],
      default: moment().format(ISO_FORMAT)
    },
    format: {
      type: [
        String,
        Function
      ],
      default: SHOW_FORMAT
    },
    dateName: {
      type: String,
      required: true
    },
    dependency: {
      type: String
    },
    disabledDatesConfig: {
      type: Object,
      default: () => {
        return {
          disabledDate(time) {
            const today = moment().subtract('days', 1).toDate();
            return moment(time).isSameOrBefore(today);
          }
        }
      }
    },
    dateLabel: {
      type: String
    },
    dateParentClass: {
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

    styles: {
      type: Object,
      default: () => {}
    }
  }
}
