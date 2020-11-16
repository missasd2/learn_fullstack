import Vue from 'vue'
import VueRouter from "vue-router"
import Content from "../components/Content"
import Main from "../components/Main"
import Way from "../components/Way"

// 这是路由的配置文件

// 安装路由
Vue.use(VueRouter);

// 配置导出路由
export default new VueRouter({
  routes: [
    {
      // 路由路径; url中请求/content会自动跳转Content这个组件
      path: '/content',
      // 路由的名称
      name: 'content',
      // 跳转的组件
      component:  Content,
    },
    {
      // 路由路径; url中请求/main会自动跳转Content这个组件
      path: '/main',
      // 路由的名称
      name: 'main',
      // 跳转的组件
      component:  Main,
    },
    {
      path: '/way',
      name: 'way',
      component: Way,
    }
  ]
});
