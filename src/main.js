import Vue from 'vue'
import router from 'router'
import store from 'store';
import vueModules from './vue-base-use-config';
import _ from 'lodash';
import {
  Notification,
  MessageBox,
  Message
} from 'element-ui';

import './components-register';
import './validations';

import 'element-ui/lib/theme-chalk/index.css';

import Root from 'modules/Root';

Vue.prototype._ = _;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgBox = MessageBox;
Vue.prototype.$message = Message;

vueModules.forEach(module => Array.isArray(module) ? Vue.use(...module) : Vue.use(module));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount('#app')
