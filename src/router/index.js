import Vue from 'vue/dist/vue'
import Router from 'vue-router'
const live = () => import('@/views/live')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'live',
      component: live
    }
  ]
})
