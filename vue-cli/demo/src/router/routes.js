import Vue from 'vue'
import vueRouter from 'vue-router'

import Home from '../components/home'
import Login from '../components/login'
import News from '../components/news'


Vue.use(vueRouter)
 
const routes = [
	{path:'/home', component: Home},
	{path:'/login', component: Login},
	{path:'/news', component: News}
]

const router = new vueRouter({
	routes
})

export default router
