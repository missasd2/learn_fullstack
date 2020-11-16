import Vue from 'vue'
import App from './App'

// 导入路由等组件
import router from './router';
// 完整引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

// Vue.config.productionTip = false
// 显式地使用组件
Vue.use(VueAxios, axios);
Vue.use(router);
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),//ElementUI规定这样使用

})
