function Circle() {
	createjs.Shape.call(this)

	this.setCircleType = function (type) {
		this._circleType = type

		switch(type) {
			case Circle.Type_No: this.setColor('#ccc'); break
			case Circle.Type_Yes: this.setColor('#f00'); break
			case Circle.Type_Cat: this.setColor('#ff0'); break
		}
	}

	this.setColor = function(colorString) {
		this.graphics.beginFill(colorString)
		this.graphics.drawCircle(0, 0, 25)
		this.graphics.endFill()
	}	

	this.getCircleType = function() {
		return this._circleType
	}
	// 默认情况下 为灰色 
	this.setCircleType(1)
}

Circle.prototype = new createjs.Shape()
Circle.Type_No = 1
Circle.Type_Yes = 2
Circle.Type_Cat = 3