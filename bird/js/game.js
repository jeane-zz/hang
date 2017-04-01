
;(function () {
	window.Game = Class.extend({
		init(paramsJSON){
			var self = this
			this.fps = paramsJSON.fps || 60

			this.timer = null 
			this.frameUtil = new FrameUtil()

			this.canvas = document.getElementById(paramsJSON.id)
			this.ctx = this.canvas.getContext("2d")
			this.images = null
			this.sr = new StaticResource()
			this.sr.loadImage('resource.json', function (aleadyLoad, all, imageObj) {
				self.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
				self.ctx.fillText("正在加载 " +aleadyLoad + " / " + all, 20,20)
				if(aleadyLoad == all) {
					self.images = imageObj
					self.run()
				}
			})


		},
		// 开始游戏
		run () {
			var self = this
			this.timer = setInterval(function(){
				self.mainloop()
			}, 2000 / self.fps)
			this.bcg1 =new Background({
				"image" :this.images.bg1,
				"width" : 300,
				"height" :256,
				"speed" : 1,
				"y":100
			})
			this.bcg2 =new Background({
				"image" :this.images.bg2,
				"width" : 300,
				"height" :256,
				"speed" : 2,
				"y":200
			})
			this.bcg3 =new Background({
				"image" :this.images.bg3,
				"width" : 48,
				"height" :48,
				"speed" : 3,
				"y":402
			})

			this.bird = new Bird()
		},
		// 主循环
		mainloop() {
			// console.log(Math.random())
			this.frameUtil.update()
			// console.log(this.frameUtil.currentFrame)
			this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
			this.ctx.fillText("FPS / " + this.frameUtil.realFps , 20, 20)
			this.ctx.fillText("FNO / " + this.frameUtil.currentFrame , 20, 40)

			// this.ctx.drawImage(this.images.pipe0, 100, 100)
			this.bcg1.update()
			this.bcg1.render()
			this.bcg2.update()
			this.bcg2.render()
			this.bcg3.update()
			this.bcg3.render()
			
			this.bird.update()
			this.bird.render()

		},
		pause(){
			clearInterval(this.timer)
		}
	})
})();