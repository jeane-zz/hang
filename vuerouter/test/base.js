// 定义路由组件， 也可以由其他文件import 

const Foo = {
	template: `<div>foo</div>`
}
const Bar = {
	template: `<div>bar</div>`
}

// 定义路由， 每个路由应该映射一个组件
const routes = [
	{
		path: '/foo',
		component: Foo
	},
	{
		path: '/bar',
		component: Bar 
	}
]

// 创建路由实例
const router = new VueRouter({
	routes
})


// 创建和挂载根实例
const app = new Vue({
	router
}).$mount('#app')