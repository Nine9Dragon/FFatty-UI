import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Test from "./components/test"
import Index from './components/index'
import Main from './components/main'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },{
      path: "/test",
      name: "test",
      component: Test
    },{
      path:'/index',
      name:'index',
      component:Index
    },{
      path:'/main',
      name:'main',
      component:Main
    }

  ]
});
