import Vue from 'vue';

export default () => {
  Vue.prototype.$translate.text = t => {
    const {
      locale
    } = Vue.prototype.$translate;

    if (locale && !locale[t]) {
      Vue.prototype.$translate.locale[t] = '';
    }

    if (!locale || !locale[t]) {
      return t;
    }

    return locale[t];
  }
}
