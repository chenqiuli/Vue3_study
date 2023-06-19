import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
// import Films from "../views/films/Films.vue";
// import Cinemas from "../views/Cinemas.vue";
// import Center from "../views/Center.vue";
// import NotFound from "../views/NotFound.vue";
// import Detail from "../views/Detail.vue";
// import Nowplaying from "../views/films/components/Nowplaying.vue";
// import Comingsoon from "../views/films/components/Comingsoon.vue";
// import Login from "../views/Login.vue";

const routes = [
  { path: '/', redirect: '/films' },
  // {
  //   path: '/',
  //   redirect: { name: 'filmspage' }
  // },
  {
    path: '/films',
    component: () => import("../views/films/Films.vue"),
    // name: 'filmspage', // 命名路由
    children: [ // 嵌套路由
      {
        path: 'nowplaying',
        component: () => import("../views/films/components/Nowplaying.vue"),
      },
      {
        path: 'comingsoon',
        component: () => import("../views/films/components/Comingsoon.vue"),
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ],
  },
  {
    path: '/cinemas',
    component: () => import("../views/Cinemas.vue"),
  },
  {
    path: '/center',
    alias: '/wode', // 别名
    component: () => import("../views/Center.vue"),
    // 需要路由守卫拦截的页面
    meta: {
      auth: true
    }
  },
  {
    path: "/detail/:id", // params 动态路由传参
    component: () => import("../views/Detail.vue"),
    name: 'detailpage'
  },
  {
    path: "/login",
    name: "loginpage",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/city",
    component: () => import("../views/City.vue"),
  },
  // {
  //   path: "/detail", // query 路由传参
  //   component: Detail,
  //   name: 'detailpage'
  // },
  {
    path: '/:pathMatch(.*)*', // 匹配 /aaa /aaa/bbb /aa/bb/cc ...
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // hash模式：url带#，通过window.onhashchange监听url的变化   // history模式：url不带#
  routes,
});

// 全局拦截，后台管理系统 所有页面需要鉴权
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem("token");
//   if (to.name !== 'loginpage' && !isAuthenticated) next({ name: 'loginpage' });
//   else next();
// });

// 某些页面需要鉴权
// router.beforeEach((to, from, next) => {
//   // console.log(to.path);
//   const isAuthenticated = localStorage.getItem("token");
//   if (to.name !== 'loginpage' && !isAuthenticated && to.path === '/center' || to.path === '/wode') next({ name: 'loginpage' });
//   else next();
// });
// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   const isAuthenticated = localStorage.getItem("token");
//   if (to.name !== 'loginpage' && !isAuthenticated && to.meta.auth) next({ name: 'loginpage' });
//   else next();
// });

// 对于分析、更改页面标题、声明页面等辅助功能
router.afterEach((to, from) => {
  // console.log(to.fullPath);
});


export default router;