import {buildModuleAliases} from 'helpers';

const {
  MODULE_NAME
} = buildModuleAliases('Content-placeholder')

export default {
  name: MODULE_NAME,
  props: {
    withHeading: {
      type: Boolean,
      default: true
    },
    withImage: {
      type: Boolean,
      default: false
    },
    withText: {
      type: Boolean,
      default: true
    },

    lines: {
      type: Number,
      default: 3
    },
    headingWithImage: {
      type: Boolean,
      default: false
    },

    loadWhen: {
      type: Boolean,
      default: true
    },
    animated: {
      type: Boolean,
      default: true
    },
    rounded: {
      type: Boolean,
      default: false
    },

    styles: {
      type: Object,
      default: () => {}
    }
  }
}
