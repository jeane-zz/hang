;(function() {
	window.Background = Class.extend({
		init (params) {
			this.image = params.image
			this.width = params.width
			this.height = params.height
			this.speed = params.speed
			this.y = params.y
			this.x = 0
			this.num = parseInt(game.canvas.width / this.width) + 1 
		},
		render (){
			for(var i = 0; i < this.num * 2; i++) {
				game.ctx.drawImage(this.image,0,0, this.width,this.height,this.x + this.width * i ,this.y,this.width,this.height)
			}
		},
		update () {
			// console.log(this.x)
			this.x -= this.speed
			if (this.x <= -this.width * this.num){
				this.x = 0
			}
		}
	})
})();