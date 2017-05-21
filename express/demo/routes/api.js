exports.index = function(req, res) {
	res.json(200, {
		name: "node", 
		age: 8,
		address: "www.nodejs.com"
	}) 
}