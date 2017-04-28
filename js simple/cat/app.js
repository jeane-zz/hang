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
	Move_leftbottom = 5

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
	currentCat = next
}


function getMoveDir(cat) {
	var can, x, y, distance = [] //distance记录当前点距离最近的选中点的距离
	

	// left
	can = true
	for(x = cat.indexX; x > 0; x--) {
		// 如果左边有选中元素
		if(circleArr[x][cat.indexY].getCircleType() == Circle.Type_Yes) {
			can	= false
			distance[Move_left] = cat.indexX - x
			break
		}
		// if(x < 0) 
	}
	if(can) {
		move(0)
	}
	// right
	can = true
	for(x = cat.indexX; x < 9; x++) {
		// 如果左边有选中元素
		if(circleArr[x][cat.indexY].getCircleType() == Circle.Type_Yes) {
			can	= false
			distance[Move_right] = x - cat.indexX
			break
		}
	}
	if(can) {
		move(3)
	}

	// lefttop
	can = true
	x = cat.indexX, y = cat.indexY
	while(1) {
		// 如果左上有选中元素
		if(circleArr[x][y].getCircleType() == Circle.Type_Yes) {
			can	= false
			distance[Move_lefttop] = cat.indexY - y
			break
		}
		if(y % 2 == 0) {
			x--
		}
		y--
		// 边界
		if(x < 0 || y < 0) {
			break
		}
	}
	if(can) {
		move(1)
	}	
	// righttop
	can = true
	x = cat.indexX, y = cat.indexY
	while(1) {
		// 如果右上有选中元素
		if(circleArr[x][y].getCircleType() == Circle.Type_Yes) {
			can	= false
			distance[Move_righttop] = cat.indexY - y
			break
		}
		if(y % 2 == 1) {
			x++
		}
		y--
		// 边界
		if(x  > 8 || y < 0) {
			break
		}
	}
	if(can) {
		move(2)
	}

	// rightbottom
	can = true
	x = cat.indexX, y = cat.indexY
	while(1) {
		// 如果右下有选中元素
		if(circleArr[x][y].getCircleType() == Circle.Type_Yes) {
			can	= false
			distance[Move_rightbottom] =y - cat.indexY 
			break
		}
		if(y % 2 == 1) {
			x++
		}
		y++
		// 边界
		if(x  > 8 || y > 8) {
			break
		}
	}
	if(can) {
		move(4)
	}
	// leftbottom
	can = true
	x = cat.indexX, y = cat.indexY
	while(1) {
		// 如果左下有选中元素
		if(circleArr[x][y].getCircleType() == Circle.Type_Yes) {
			can	= false
			distance[Move_leftbottom] =y - cat.indexY 
			break
		}
		if(y % 2 == 0) {
			x--
		}
		y++
		// 边界
		if(x < 0 || y > 8) {
			break
		}
	}
	if(can) {
		move(5)
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
			c.x = indexY % 2 == 0 ? indexX * 36 : indexX * 36 + 20
			c.y = indexY * 36 

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

	getMoveDir(currentCat)
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


