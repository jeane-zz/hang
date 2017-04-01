;(function() {
	window.Bird = Class.extend({
		init () {
			this.x = (game.canvas.width - 85) / 2
			this.y = 100
			this.width = 85
			this.height = 60
			this.state = 0
			this.dY = 0
		},
		render (){
			// console.log(1)
			game.ctx.save()
			// game.ctx.translate(game.canvas.width / 2, this.y)
			// game.ctx.rotate((Math.PI / 180) * 25)
			game.ctx.drawImage(game.images.bird,this.state * this.width,0, this.width,this.height, this.x ,this.y,this.width,this.height)
			game.ctx.restore()
		},
		update () {
			// console.log(this.x)
			if(game.frameUtil.currentFrame % 10 == 0) {
				this.state ++
				if (this.state == 3){
					this.state = 0
				}
			}
			this.y += this.dY
			this.dY	+= 0.5
		}
	})
})();