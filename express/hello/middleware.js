var express = require('express')
var app = express()
var http = require('http')

app.use((req, res, next) => {
	console.log('it is from a ' + req.method + ' to ' + req.url)
	next()
})
app.use((req, res) => {
	res.writeHead(200, {"Content-Type" : "text/html;charset='utf-8'"})
	res.end("middleware 中间件")
})
app.listen(3000)