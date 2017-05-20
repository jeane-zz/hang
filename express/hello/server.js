var fs = require('fs')
var option = {
	key: fs.readFileSync('./public/server.key'),
	cert: fs.readFileSync('./public/server.crt'),
	passphrase: '1234'
}

var express = require('express')
var app = express()
var https = require('https')
app.get('/', function(req, res){
	res.send('Hello world ')
})

var server = https.createServer(option, app)
server.listen(8048)
console.log('server is running on port 8048')
