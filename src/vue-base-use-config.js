import VueTranslate from 'vue-translate-plugin';
import VueContentPlaceholders from 'vue-content-placeholders';
import VueAnimateNumber from 'vue-animate-number';
import * as VueGoogleMaps from 'vue2-google-maps';
import Vuelidate from 'vuelidate';

import {
  TimeSelect,
  DatePicker,
  Autocomplete,
  Alert
} from 'element-ui';

import enLang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(enLang);

export default [
  VueTranslate,
  Vuelidate,
  VueContentPlaceholders,
  VueAnimateNumber,
  TimeSelect,
  DatePicker,
  Autocomplete,
  Alert,
  [
    VueGoogleMaps,
    {
      load: {

      }
    }
  ]
]
