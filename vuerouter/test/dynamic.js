// 定义路由组件， 也可以由其他文件import 

const User = {
	template: `<div>User {{$route.params.id}}</div>`,
	// 检测 $route 对象, 对路由参数的变化作出响应
	watch: {
		'$route' (newPath, oldPath) {
			console.log(oldPath.path +'  ->  '+newPath.path)
		}
	}
}

// 定义路由， 每个路由应该映射一个组件
const routes = [
	{
		// 动态路径参数 以冒号开头
		// 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
		path: '/user/:id',
		component: User
	},
	
]

// 创建路由实例
const router = new VueRouter({
	routes
})

// 创建和挂载根实例
const app = new Vue({
	router
}).$mount('#app')