import Vue from 'vue';

import Content_placeholder from 'reusables/Content-placeholder';
import PartiesList from 'modules/Parties-list';

const GLOBAL_MODULES = {
  'Content-placeholder': Content_placeholder,

  'Parties-list': PartiesList
}

Object.keys(GLOBAL_MODULES).forEach(module => Vue.component(module, GLOBAL_MODULES[module]));

export default {
  // we just export to expose the global modules
};
