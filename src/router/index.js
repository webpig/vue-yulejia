import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Lazy from '@/components/Lazy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/lazy',
      name: 'Lazy',
      component: Lazy
    }
  ]
})
