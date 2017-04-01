
;(function() {
	window.StaticResource = Class.extend({
		init (){
			this.images = {}
		},
		loadImage(jsonURL, callback) {
			var self = this
			var xhr =new XMLHttpRequest()
			xhr.onreadystatechange = function (){
				if(xhr.readyState == 4){
					if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
						var alreadyLoad = 0
						var jsonObj = JSON.parse(xhr.responseText)
						// console.log(jsonObj)

						for(var i = 0; i < jsonObj.image.length; i++){
							var image = new Image()
							image.src = jsonObj.image[i].src
							image.index = i
							image.onload = function(){
								alreadyLoad ++
								self.images[jsonObj.image[this.index].name] = this
								callback(alreadyLoad,jsonObj.image.length, self.images)
							}
						}
					} 
				}
			}
			xhr.open('GET', jsonURL, true)
			xhr.send(null)
		}
	})
})();