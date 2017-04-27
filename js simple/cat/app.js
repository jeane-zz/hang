var stage = new createjs.Stage('gameView')
createjs.Ticker.setFPS(30)

createjs.Ticker.addEventListener('tick', stage)
// 容器 
var gameView = new createjs.Container();
// 移动画布
gameView.x = 30
gameView.y = 30


stage.addChild(gameView)

var circleArr = [[],[],[],[],[],[],[],[],[]]

// 当前猫的位置
var currentCat 

// 猫的状态
var Move_none = -1,
	Move_left = 0,
	Move_lefttop = 1,
	Move_righttop = 2,
	Move_right = 3,
	Move_rightbottom = 4,
	Move_lefttbottom = 5

function move(type) {
	var x = currentCat.indexX
	var y = currentCat.indexY
	switch(type) {
		// case -1: ;break;		   // Move_none
		case 0: x -= 1; break; // Move_left
		case 1: x -= y % 2 ? 0 : 1; y -= 1; break; // Move_lefttop
		case 2: x += y % 2 ? 1 : 0; y -= 1; break; // Move_righttop
		case 3: x += 1; break; 						// Move_right
		case 4: x += y % 2 ? 1 : 0; y += 1; break; // Move_rightbottom
		case 5: x -= y % 2 ? 0 : 1; y += 1; break; // Move_lefttbottom
	}
	var next = circleArr[x][y]
	next.setCircleType(3)
	currentCat.setCircleType(1)
	currentCat = nextgiy
}


function getMoveDir(cat) {
	var can = true

	for(var x = cat.indexX; x > 0; x--) {
		if(circleArr[x][cat.indexY].getCircleType() == Circle.Type_Yes) {
			can	= false
		}
	}
}

function gameFail() {
	alert('game over')
	return 
}

function addCircles() {
	for(var indexX = 0; indexX < 9; indexX++) {
		for(var indexY = 0; indexY < 9; indexY ++){
			var c = new Circle()
			gameView.addChild(c)
			circleArr[indexX][indexY] = c
			c.indexX = indexX
			c.indexY = indexY
			c.x = indexY % 2 == 0 ? indexX * 55 : indexX * 55 + 25
			c.y = indexY * 55 

			if(indexY == 4 && indexX == 4) {
				c.setCircleType(3)
				currentCat = c
			}

			c.addEventListener('click', circleClick)
		}
	}
}
// 点击圆 变色
function circleClick(event) {
	if(event.target.getCircleType() !== Circle.Type_Cat) {
		event.target.setCircleType(Circle.Type_Yes)
	}

	if(currentCat.indexY == 0 || currentCat.indexY == 8 || currentCat.indexX == 0 || currentCat.indexX == 8) {
		gameFail()
	}
	// var leftCircle = circleArr[currentCat.indexX - 1][currentCat.indexY]
	// if(leftCircle.getCircleType() == 1) {
	// 	leftCircle.setCircleType(3)
	// 	currentCat.setCircleType(1)
	// 	currentCat = leftCircle
	// }

}

// 绘制所有的圆
addCircles()


// var s = new createjs.Shape()
// s.graphics.beginFill('#f00')
// s.graphics.drawCircle(50, 50, 25)
// s.graphics.endFill()
// gameView.addChild(s)


