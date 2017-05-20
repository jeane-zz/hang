var express = require('express')
var app = express()
var http = require('http')
app.use((req, res, next) => {
	if(req.url == '/'){
		console.log('it is from a ' + req.method + ' to ' + req.url)
		res.writeHead(200, {"Content-Type" : "text/html;charset='utf-8'"})
		res.end("欢迎来到主页! \n")
	} else {
		next()
	}
})
app.use((req, res, next) => {
	if(req.url == '/about'){
		console.log('it is from a ' + req.method + ' to ' + req.url)
		res.writeHead(200, {"Content-Type" : "text/html;charset='utf-8'"})
		res.end("欢迎来到about页面! \n")
	} else {
		next()
	}
})

app.use((req, res) => {
	res.writeHead(404, {"Content-Type" : "text/html;charset='utf-8'"})
	res.end("404 error! \n")
})
app.listen(3000)