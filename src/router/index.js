import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import NotFound from '../views/NotFount'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product')
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import('../views/Question')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('../views/Policy')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import('../views/Favorite')
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('../views/Policy')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
