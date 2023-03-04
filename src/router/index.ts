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
  {
    path: '/VanListTest',
    name: 'VanListTest',
    component: () => import('../views/VanListTest.vue')
  },
  {
    path: '/ItemManager',
    name: 'ItemManager',
    component: () => import('../views/ItemManager.vue')
  },
  
  {
    path: '/SecKill',
    name: 'SecKill',
    component: () => import('../views/SecKill.vue')
  },
  // D:\proj\vue\vite-project\src\views\ProductList.vue
  {
    path: '/ProductList',
    name: 'ProductList',
    component: () => import('../views/ProductList.vue')
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
