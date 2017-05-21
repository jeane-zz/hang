var path = require('path')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()



// set方法用于设定内部变量
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// use方法用于调用express的中间件
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
// app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
	var body = 'Hello World';
  	res.setHeader('Content-Type', 'text/plain');
  	res.setHeader('Content-Length', body.length);
  	res.end(body);
})
// app.get('/api', function(req, res){
// 	res.send({'name':'lingling1', 'age':23})
// })
var api = require('./routes/api')

app.get('/api', api.index)


app.listen(app.get('port'))