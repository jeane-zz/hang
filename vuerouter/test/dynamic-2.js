// 定义路由组件， 也可以由其他文件import 

// const User = {
// 	template: `<div>User {{$route.params.id}}</div>`,
// 	// 检测 $route 对象, 对路由参数的变化作出响应
// 	watch: {
// 		'$route' (newPath, oldPath) {
// 			console.log(oldPath.path +'  ->  '+newPath.path)
// 		}
// 	}
// }

// 定义路由， 每个路由应该映射一个组件
const routes = [
	{
		path: '/'
	},
	{
		path: '/params/:foo/:bar'
	},
	{
		path: '/optional-params/:foo?'
	},
	{
		path: '/params-with-regex/:id(\\d+)'
	},
	{
		path: '/asterisk/*'
	},
	{
		path: '/optional-group/(foo/)?bar'
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