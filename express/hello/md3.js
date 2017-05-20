var express = require('express')
var app = express()
var http = require('http')
app.use((req, res, next) => {
	if(req.url == '/'){
		console.log('it is from a ' + req.method + ' to ' + req.url +" request.ip:  "+req.ip)

		res.writeHead(200, {"Content-Type" : "text/html;charset='utf-8'"})
		res.end("欢迎来到主页! \n")
	} else {
		next()
	}
})
app.use('/about', (req, res, next) => {
	console.log('it is from a ' + req.method + ' to ' + req.url)
	// 页面重定向
	// res.redirect("/hello/anime");
	res.writeHead(200, {"Content-Type" : "text/html;charset='utf-8'"})

	res.end("欢迎来到about页面! \n")
})
app.use('/user/:who', (req, res) => {
	console.log(req.params.who+ '\n')
	console.log('it is from a ' + req.method + ' to ' + req.url)
	res.writeHead(200, {"Content-Type" : "text/html;charset='utf-8'"})
	if(req.params.who){
		res.end("欢迎登录! " + req.params.who + " \n")
	} else {
		res.end("欢迎来到user页面 \n")
	}
})

app.use((req, res) => {
	res.writeHead(404, {"Content-Type" : "text/html;charset='utf-8'"})
	res.end("404 error! \n")
})
app.listen(3000)