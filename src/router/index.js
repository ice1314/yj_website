import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/AboutUs.vue'
import AppDownload from "../views/AppDownload";
import Certificate from "../views/Certificate"
import NewsList from "../views/NewsList"
import NewsDetail from "../views/NewsDetail"
import YjNews from "../views/YjNews"
import ProductService from "../views/ProductService"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '奕杰-首页'
    }
  },
  {
    path: '/productService',
    name: 'ProductService',
    component: ProductService,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue'),
    component: About,
    meta: {
      title: '奕杰-关于我们'
    }
  },
  {
    path: '/download',
    name: 'Download',
    component: AppDownload,
  },
  {
    path: '/certificate',
    name: 'Certificate',
    component: Certificate,
  },
  {
    path: '/newsList',
    name: 'NewsList',
    component: NewsList,
  },
  {
    path: '/yjNews',
    name: 'YjNews',
    component: YjNews,
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: NewsDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
