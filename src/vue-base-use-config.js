import VueTranslate from 'vue-translate-plugin';
import VueContentPlaceholders from 'vue-content-placeholders';
import VueAnimateNumber from 'vue-animate-number';
import * as VueGoogleMaps from 'vue2-google-maps';

export default [
  [
    VueTranslate
  ],
  [
    VueContentPlaceholders
  ],
  [
    VueAnimateNumber
  ],
  [
    VueGoogleMaps,
    {
      load: {

      }
    }
  ]
]
