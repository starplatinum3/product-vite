import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HelloWorld',
    // component: HomeView
   component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/Promo',
    name: 'Promo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Promo.vue')
  },
  {
    path: '/Person',
    name: 'Person',
    component: () => import('../views/Person.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
