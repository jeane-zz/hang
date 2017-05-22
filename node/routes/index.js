var crypto = require('crypto')
var User = require('../models/user.js')

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: '主页' })
  })
  app.get('/reg', function(req, res){
  	res.render('reg', {title: '注册'})
  })
  app.post('/reg', function (req, res) {
  	var name = req.body.name 
    var password = req.body.password
    var password_re = req.body['password-repeat']
    // 验证两次输入的密码是否一致    
    if(password_re != password){
      req.flash('error', '两次输入的密码不一致 ！ ')
      return res.redirect('/reg')
    }
    // 生成密码的md5值
    var md5 = crypto.createHash('md5')
    var password = md5.update(req.body.password).digest('hex')
    var newUser = new User({
      name,
      password,
      email: req.body.email
    })
    // 检测用户是否已经存在
    User.get(newUser.name, function (err, user) {
      console.log('验证用户是否存在。。。')
      if(err) {
        req.flash('error', err)
        return res.redirect('/')
      }
      if(user) {
        req.flash('error', '用户已存在')
        return res.redirect('/')
      }
      // 不存在就新增用户
      newUser.save(function (err, user) {
        console.log('新增用户。。。')
        if(err) {
          req.flash('error', err)
          return res.redirect('/reg')
        }
        req.session.user = user
        req.flash('success', '注册成功')
        res.redirect('/')

      })
    })

  })
  app.get('/login', function (req, res) {
    res.render('login', { title: '登录' })
  })
  app.post('/login', function (req, res) {
  	
  })
  app.get('/post', function(req, res){
  	res.render('post', {title: '发表'})
  })
  app.post('/post', function (req, res) {
    
  })
  app.get('/logout', function(req, res){
  	res.render('logout', {title: '登出'})
  })
}
