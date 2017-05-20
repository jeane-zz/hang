var fs = require('fs')
var option = {
	key: fs.readFileSync('./public/a.txt'),
	cert: fs.readFileSyne('./public/a.txt'),
	passphrase: '1234'
}

var express = require('express')
var app = express()
var http = require('http')
app.get('/', function(req, res){
	res.send('Hello world ')
})

var server = http.createServer(options, app)
server.listen(8048)
console.log('server is running on port 8048')
