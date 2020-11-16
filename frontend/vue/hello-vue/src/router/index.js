import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from '../views/Login'

import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'

import NotFound from "../views/NotFound";



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      // 路由路径
      path: '/main/:name',
      component: Main,
      props: true,
      name: 'main',
      // 路由嵌套
      children: [
        {
          // 绑定参数id; 前端Main.vue中穿了参数id
          path: '/user/profile/:id',
          name: "profile",
          component: UserProfile
        },
        {
          //
          path: '/user/list',
          name: "list",
          component: UserList
        },
      ]
    },
    {
      // 路由路径
      path: '/login',
      name: "login",
      component: Login,
    },

    { // 重定向
      path: '/goHome',
      redirect: '/main'

    },
    {
      path: '*',
      component: NotFound,
    },



  ]
});
