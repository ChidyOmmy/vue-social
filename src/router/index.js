import Vue from 'vue'
import VueRouter from 'vue-router'
import ChatScreen from '../views/ChatScreen.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import('../views/Home.vue')
},
  {
    path: '/chat',
    name: 'ChatScreen',
    component: ChatScreen
  },
  {
    path: '/list',
    name: 'ChatList',
    component: () => import('../views/ChatList.vue')
  },
  {
    path: '/status',
    name: 'Status',
    component: () => import('../views/Status.vue')
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router