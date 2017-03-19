if(localStorage){
	if(!('todos' in localStorage)){
		localStorage.setItem('todos','[]')
	}
}

var app = new Vue ({
	el:'#app',
	data:{
		inputData:"",
		showing:'all',
		todos: JSON.parse(window.localStorage.getItem('todos') || '[]')
	},
	computed:{
		// 全部完成按钮 的状态 需要对下面li的状态进行监控
		allSelected:function(){
			return this.todos.every(it => it.finish)
		},
		counter:function(){
			return this.todos.filter(it => it.finish == false).length
		},
		showingTodo:function(){
			if(this.showing == 'all'){
				return this.todos
			}
			if(this.showing == 'active'){
				return this.todos.filter(it => it.finish == false)
			}
			if(this.showing == 'complete'){
				return this.todos.filter(it => it.finish == true)
			}
		}
	},
	methods:{
		edit(){
		},
		editfinish(index){
			console.log(this.todos[index])
		},
		toggleSelected:function(){
			if(this.allSelected){
				this.todos.forEach(it => it.finish = false)
			}else {
				this.todos.forEach(it => it.finish = true)
			}
		},
		clearComplete(){
			this.todos = this.todos.filter(it => it.finish == false)
		},
		// 从输入框添加事件
		add:function(event){
			// input内容和 inputData进行绑定
			this.todos.push({thing:this.inputData,finish:false})
			this.inputData = ""
		},
	},
	watch:{
		todos: {
			handler: function () {
				if(window.localStorage) {
					localStorage.setItem('todos', JSON.stringify(this.todos))
				}else{
					Cookie.write('todos', this.todos)
				}
			},
			deep: true
		}
	}
})