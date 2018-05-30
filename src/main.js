import Vue from 'vue'
import router from 'router'
import store from 'store';
import vueModules from './vue-base-use-config';
import _ from 'lodash';
import localforage from 'localforage';
import {
  Notification,
  MessageBox,
  Message,
  Loading
} from 'element-ui';

import './components-register';
import './validations';

import 'element-ui/lib/theme-chalk/index.css';

// icons
import 'vue-awesome/icons/angle-right';
import 'vue-awesome/icons/angle-down';
import 'vue-awesome/icons/angle-up';
import 'vue-awesome/icons/calendar';
import 'vue-awesome/icons/info-circle';
// end icons

import Root from 'modules/Root';

Vue.prototype._ = _;
Vue.prototype.$db = localforage;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgBox = MessageBox;
Vue.prototype.$message = Message;
Vue.prototype.loading = Loading;

vueModules.forEach(module => Array.isArray(module) ? Vue.use(...module) : Vue.use(module));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app')
