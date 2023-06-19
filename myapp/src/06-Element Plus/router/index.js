import { createRouter, createWebHistory, } from 'vue-router';

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', // 匹配 /aaa /aaa/bbb /aa/bb/cc ...
    component: () => import("../views/Home.vue"),
  },
  {
    path: '/news/add', // 匹配 /aaa /aaa/bbb /aa/bb/cc ...
    component: () => import("../views/AddNews.vue"),
  },
  {
    path: '/news/list', // 匹配 /aaa /aaa/bbb /aa/bb/cc ...
    component: () => import("../views/NewsList.vue"),
  },
  {
    path: '/:pathMatch(.*)*', // 匹配 /aaa /aaa/bbb /aa/bb/cc ...
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // hash模式：url带#，通过window.onhashchange监听url的变化   // history模式：url不带#
  routes,
});

export default router;