// 行数 整体颜色 选中颜色
function Rect(n, color, rectColor) {
	console.log(color, rectColor)
	createjs.Shape.call(this)
	this.setRectType = function (type) {
		this._RectType = type
		switch(type) {
			case 1: this.setColor(color); break;
			case 2: this.setColor(rectColor); break;
		}
	}

	this.setColor = function(c) {
		this.graphics.beginFill(c)
		this.graphics.drawRect(0,0,600/n - 5, 600/n - 5)
		this.graphics.endFill()
	}

	this.getRectType = function() {
		return this._RectType
	}
	this.setRectType(1)
}

Rect.prototype = new createjs.Shape()