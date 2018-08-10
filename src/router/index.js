import Vue from 'vue'
import Router from 'vue-router'
import Longin from '@/views/Login'
import Home from '@/views/Home'
Vue.use(Router)

export default new Router({
  routes: [
    { name: 'Home', path: '/', component: Home },
    { name: 'Login', path: '/login', component: Longin }
  ]
})
