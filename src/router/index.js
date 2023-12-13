import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'button',
      component: resolve => require(["../views/button"], resolve),
      meta: {
          title: "按钮"
          // keepAlive:true
      }
    },
  ]
})
