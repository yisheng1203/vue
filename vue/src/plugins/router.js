import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import home from '../pages/home.vue';
import gocar from '../pages/gocar.vue';
import detail from '../pages/detail.vue';
import user from '../pages/user.vue';
import login from '../pages/login.vue';
import footer from '../components/footer.vue';
import reg from '../pages/reg.vue';
import shopp from '../pages/shopp.vue';
import error from '../pages/error.vue';

let routes = [
  {path:'/home',component:home},
  {path:'/gocar',component:gocar},
  {path:'/detail',component:detail,name:"detail"},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/user',component:user},
  {path:'/shopp',component:shopp},
  {path:'/footer',component:footer},
  {path:'/',redirect:'/home'},
  {path:'*',component:error},
];

let router = new VueRouter({routes});

export default router;