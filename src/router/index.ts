import { createRouter, createWebHashHistory } from "vue-router"; // createWebHashHistory   hash路由  createWebHistory  history路由
import Earchs from "../views/Earchs/index.vue";
import BasicUseJS from "../views/BasicUseJS/index.vue";
import Film from "../views/Film.vue";
// import MyVuex from "../views/vuex/index.vue";
const routes = [
  {
    path: "/earchs",
    name: '图表js',
    component: Earchs,
  },
  {
    path: '/mystudy',
    name: '我的学习笔记',
    component: BasicUseJS,
  },
  {
    path: '/Film',
    name: 'ctx',
    component: Film,
  },
  // {
  //   path:'/vuex',
  //   name:'vuex',
  //   component:MyVuex,
  // },
  // {
  //   path: "/",
  //   redirect: "/earchs",
  // },
];
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  // mode :history,mode :hash
  routes,
});
export default router;
