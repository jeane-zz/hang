var stage = new createjs.Stage('gameView')
createjs.Ticker.setFPS(30)

createjs.Ticker.addEventListener('tick', stage)
// 容器 
var gameView = new createjs.Container();
// // 移动画布
// gameView.x = 30
// gameView.y = 30


stage.addChild(gameView)

var n = 2, dt = 100
function addRect() {
	var h = parseInt(Math.random()* 360)
	var s = (Math.random()*80 + 10).toFixed(2)+ '%'
	var l = (Math.random()*80 + 10).toFixed(2)+ '%'
	
	var color1 = `hsl(${h}, ${s}, ${l})`
	console.log(color1)
	var color2 = `hsl(${Math.abs(h-dt)}, ${s}, ${l})` 
	console.log(color2)
	var x = parseInt(Math.random()* n)
	var y = parseInt(Math.random()* n)
	console.log(x, y)
	for(var indexX = 0; indexX < n; indexX++){
		for(var indexY = 0; indexY < n; indexY++){
			var r = new Rect(n, color1, color2)
			gameView.addChild(r)
			r.x = indexX
			r.y = indexY

			if(r.x == x && r.y == y) {
				r.setRectType(2)
				r.addEventListener('click', function() {
					if(n < 12) {
						n++
					}
					if(dt >= 30){
						dt -= 5
					}
					gameView.removeAllChildren()
					addRect()
				})
			}

			r.x = indexX *(600 / n)
			r.y = indexY *(600 / n)

			// if(r.getRectType() == 2) {
				
			// }
		}
	}
}

addRect()