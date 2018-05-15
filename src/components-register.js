import Vue from 'vue';

import ContentPlaceholder from 'reusables/Content-placeholder';
import InputGenerator from 'reusables/Input-generator';
import DatepickerGenerator from 'reusables/Datepicker-generator';
import AutocompleteGenerator from 'reusables/Autocomplete-generator';
import TimepickerGenerator from 'reusables/Timepicker-generator';

import PartiesList from 'modules/Parties-list';
import PartyFormDemo from 'modules/Party-form-demo';

const GLOBAL_MODULES = {
  'Content-placeholder': ContentPlaceholder,
  'Input-generator': InputGenerator,
  'Datepicker-generator': DatepickerGenerator,
  'Autocomplete-generator': AutocompleteGenerator,
  'Timepicker-generator': TimepickerGenerator,

  'Parties-list': PartiesList,
  'Party-form-demo': PartyFormDemo
}

Object.keys(GLOBAL_MODULES).forEach(module => Vue.component(module, GLOBAL_MODULES[module]));

export default {
  // we just export to expose the global modules
};
