import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */ '../views/List.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
