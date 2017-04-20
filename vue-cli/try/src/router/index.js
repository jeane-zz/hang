import Vue from 'vue'
import Router from 'vue-router'
import head from '@/components/head'
import login  from '@/components/login '

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'head',
      component: head,
      children:[
      	{
      		path: '/1',
      		component: login

      	}
      ]
    }
  ]
})
