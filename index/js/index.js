const Html = {
	template: `
		<div class= 'hc'>
			<ul>
				<li v-for="h in hc">
					{{h.title}}
				</li>
			</ul>
		</div>
	`
}

const routes = [
	{
		path: '/html',
		component: Html
	}
]

const router = new VueRouter ({
	routes
})

const app = new Vue ({
	router,
	data: {
		hc: [
			{
				title: 'aaa',
				bgc: 'pics/1.png',
				description: 'rumenjiyemian'
			},{
				title: 'aaa',
				bgc: 'pics/1.png',
				description: 'rumenjiyemian'
			},{
				title: 'aaa',
				bgc: 'pics/1.png',
				description: 'rumenjiyemian'
			}
		]
	},
}).$mount('#app')