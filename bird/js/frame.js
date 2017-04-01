;(function () {
	window.FrameUtil = Class.extend({
		init(){
			this.currentFrame = 0
			this.sFrame = 0
			this.sTime = new Date()

			this.realFps = 0
		},
		update(){
			this.currentFrame++
			var t = new Date()
			if(t - this.sTime >= 2000) {
				this.realFps = this.currentFrame - this.sFrame
				this.sFrame = this.currentFrame
				this.sTime = t
			}
		}

	})
})();