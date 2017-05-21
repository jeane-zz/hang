var express = require('express')
var app = express()

var router = express.Router()

router.get('/', function(req, res) {
	res.send('home')
})

router.get('/about', function (req, res) {
	res.send('about')
})

app.route('/login')
	.get(function(req, res) {
		res.send('this is the login form')
	})
	.post(function (req, res) {
		console.log('processing')
		res.send('processing the login form')
	})

app.use('/', router)


app.listen(3000)

