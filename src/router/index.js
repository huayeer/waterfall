import Vue from 'vue'
import Router from 'vue-router'
import Waterfall from '@/components/Waterfall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Waterfall',
      component: Waterfall
    }
  ]
})
