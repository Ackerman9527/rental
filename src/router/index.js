import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/index',
    children: [
      {
        path: 'detail',
        component: () => import('../views/detail/goodsDetail.vue')
      },
      {
        path: 'index',
        component: () => import('../views/detail/index.vue')
      }
    ]
  },
  // ,
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
