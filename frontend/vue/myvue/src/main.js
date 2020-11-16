// 导入两个组件
// 从安装的模块中引入组件
import Vue from 'vue'
// 从自定义的模块引入组件
import App from './App'
import router from './router' // 只要配置文件是index.js，就会默认自动扫描里面的路由配置

Vue.config.productionTip = false;




new Vue({
  el: '#app',
  // 配置路由
  router,
  components: { App },
  template: '<App/>'
})
