import Vue from 'vue';

import Icon from 'vue-awesome/components/Icon';
import ContentPlaceholder from 'reusables/Content-placeholder';
import Counter from 'reusables/Counter';
import InputGenerator from 'reusables/Input-generator';
import SelectGenerator from 'reusables/Select-generator';
import DatepickerGenerator from 'reusables/Datepicker-generator';
import AutocompleteGenerator from 'reusables/Autocomplete-generator';
import TimepickerGenerator from 'reusables/Timepicker-generator';
import DialogGenerator from 'reusables/Dialog-generator';

import PartiesList from 'modules/Parties-list';
import PartyFormDemo from 'modules/Party-form-demo';

const GLOBAL_MODULES = {
  'Icon': Icon,

  'Counter': Counter,
  'Content-placeholder': ContentPlaceholder,
  'Select-generator': SelectGenerator,
  'Input-generator': InputGenerator,
  'Datepicker-generator': DatepickerGenerator,
  'Autocomplete-generator': AutocompleteGenerator,
  'Timepicker-generator': TimepickerGenerator,
  'Dialog-generator': DialogGenerator,

  'Parties-list': PartiesList,
  'Party-form-demo': PartyFormDemo
}

Object.keys(GLOBAL_MODULES).forEach(module => Vue.component(module, GLOBAL_MODULES[module]));

export default {
  // we just export to expose the global modules
};
