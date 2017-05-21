var path = require('path')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var hbs = require('hbs')

var blogEngine = require('./blog')

// set方法用于设定内部变量
app.set('port', process.env.PORT || 3000)
// app.set('views', path.join(__dirname, 'views'))
// 指定模板的后缀名为html
app.set('view engine', 'html')
// hbs模块运行
app.engine('html', hbs.__express)
// app.use(app.router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function(req, res) {
   res.render('index', {
   	title: "最近文章",
   	entries: blogEngine.getBlogEntries()
   });
});
 
app.get('/about', function(req, res) {
   res.render('about', {
   	title: "介绍"
   });
});
 
app.get('/article/:id', function(req, res) {
    var entry = blogEngine.getBlogEntry(req.params.id)
    console.log('id' + req.params.id)
    console.log("entry " + entry)
   res.render('article', {
   	title: entry.title,
   	blog: entry
   });
});

app.listen(app.get('port'))