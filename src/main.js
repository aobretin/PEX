import Vue from 'vue'
import router from 'router'
import store from 'store';
import vueModules from './vue-base-use-config';
import _ from 'lodash';

import './components-register';

import Root from 'modules/Root';

Vue.prototype._ = _;
vueModules.forEach(module => Vue.use(...module));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app')
