// 定义路由组件， 也可以由其他文件import 

const User = {
	template: `
	<div>
		<h2>User {{$route.params.id}}</h2>
		<router-link to="./profile">profile</router-link>	
		<router-link to="./posts">posts</router-link>
		<router-view></router-view>
	</div>`,
	// 检测 $route 对象, 对路由参数的变化作出响应
	watch: {
		'$route' (newPath, oldPath) {
			console.log(oldPath.path +'  ->  '+newPath.path)
		}
	}
}

const UserProfile = {
	template: `
		<div>
			<form action="">
				<label >姓名：</label><input type="text" /><br />
				<label >性别：</label>
				<label >男<input type="radio" name="gender"/></label>
				<label >女<input type="radio" name="gender"/></label><br />
				<button>提交</button>
			</form>
		</div>
	`
}

const UserPosts = {
	template: `
		<div>
			<form action="">
				<label >电话：</label><input type="text" /><br />
				<label >email：</label><input type="text" /><br />
				<button>提交</button>
			</form>
		</div>
	`
}
// 定义路由， 每个路由应该映射一个组件
const routes = [
	{
		// 动态路径参数 以冒号开头
		// 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。
		path: '/user/:id',
		component: User,
		children: [
			{
				// 路径 /user/:id/profile
				path: '/user/profile',
				component: UserProfile,
			},
			{
				path: '/user/posts',
				component: UserPosts,
			},
		]
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