var crypto = require('crypto')
var User = require('../models/user.js')
var Post = require('../models/post.js')
var Comment = require('../models/comment.js')

module.exports = function(app) {
  app.get('/', function(req, res) {
    var page = req.query.p ? parseInt(req.query.p) : 1
    console.log('page is home : ' + page)
    Post.getTen(null, page, function (err, posts, total) {
      if(err) {
        posts = []
      }
      res.render('index', {
        title: '主页',
        posts: posts,
        page: page,
        isFirstPage: (page - 1) == 0,
        isLastPage: ((page - 1) * 10 + posts.length) == total,
        user: req.session.user,
        success: req.flash('success').toString(),
        error: req.flash('error').toString()
      })
    })
  })
  // app.get('/', function (req, res) {
  //   Post.getAll(null, function (err, posts) {
  //     if(err) {
  //       posts = []
  //     }
  //     res.render('index', { 
  //       title: '主页',
  //       user: req.session.user,
  //       posts: posts,
  //       success: req.flash('success').toString(),
  //       error: req.flash('error').toString()
  //     })
  //   })
  // })
  app.get('/reg', checkNotLogin);
  app.get('/reg', function(req, res){
  	res.render('reg', {
      title: '注册',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    })
  })
  app.post('/reg', checkNotLogin);
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
  app.get('/login', checkNotLogin);
  app.get('/login', function (req, res) {
    res.render('login', { 
      title: '登录',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString() 
    })
  })
  app.post('/login', checkNotLogin);
  app.post('/login', function (req, res) {
  	var md5 = crypto.createHash('md5')
    var password = md5.update(req.body.password).digest('hex')

    User.get(req.body.name, function (err, user) {
      if(!user) {
        req.flash('error', '用户不存在')
        console.log('用户不存在')
        return res.redirect('/login')
      }
      if(user.password != password) {
        req.flash('error', '密码错误')
        console.log('密码错误')
        return res.redirect('/login')
      }

      req.session.user = user 
      req.flash('message', {'success': '登陆成功'})
      console.log('登陆成功')
      res.redirect('/')
    })
  })
  app.get('/post', checkLogin);
  app.get('/post', function(req, res){
  	res.render('post', {
      title: '发表',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    })
  })
  app.post('/post', checkLogin);
  app.post('/post', function (req, res) {
    var currentUser = req.session.user
    var tags = [req.body.tag1, req.body.tag2, req.body.tag3]
    var post = new Post(currentUser.name, req.body.title, req.body.post, tags)
    post.save(function (err) {
      if(err) {
        req.flash('error', err)
        return res.redirect('/')
      }
      req.flash('success', '发布成功')

      res.redirect('/')
    })

  })
  app.get('/logout', checkLogin);
  app.get('/logout', function (req, res) {
    req.session.user = null
    req.flash('success', '登出成功')
    res.redirect('/')

  }) 
  // app.get('/logout', function(req, res){
  //  res.render('logout', {title: '登出'})
  // })
// 只有登录的用户才能上传文件
  app.get('/upload', checkLogin)
  app.get('/upload', function (req, res) {
    res.render('upload', {
      title: '文件上传',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    })
  })

  app.post('/upload', checkLogin)
  app.post('/upload', function (req, res) {
    req.flash('success', '文件上传成功')
    res.redirect('/upload')
  })

  app.get('/archive', function (req, res) {
    Post.getArchive(function(err, posts) {
      if(err) {
        req.flash('error', err)
        return res.redirect('/')
      }
      res.render('archive', {
        title: '存档',
        posts: posts,
        user: req.session.user,
        success: req.flash('success').toString(),
        error: req.flash('error').toString()
      })
    })
    
  })
  // 用户页
  // app.get('/u/:name', checkLogin);
  
  app.get('/u/:name', function(req, res) {
    var page = req.query.p ? parseInt(req.query.p) : 1
    console.log('page is' + page)
    User.get(req.params.name, function (err, user) {
      if(!user) {
        req.flash('error', '用户不存在')
        return res.redirect('/')
      }

      Post.getTen(user.name, page, function(err, posts, total) {
        if(err) {
          req.flash('error', err)
          return res.redirect('/')
        }
        res.render('user', {
          title: user.name,
          posts: posts,
          page: page,
          isFirstPage: (page - 1) == 0,
          isLastPage:((page - 1) * 10 + posts.length) == total,
          user: req.session.user,
          success: req.flash('success').toString(),
          error: req.flash('error').toString()
        })
      })
    })
  })
  // app.get('/u/:name', function(req, res) {
  //   User.get(req.params.name, function (err, user) {
  //     if(!user) {
  //       req.flash('error', '用户不存在')
  //       return res.redirect('/')
  //     }

  //     Post.getAll(user.name, function(err, posts) {
  //       console.log('post.getAll')
  //       if(err) {
  //         req.flash('error', err)
  //         return res.redirect('/')
  //       }
  //       res.render('user', {
  //         title: user.name,
  //         posts: posts,
  //         user: req.session.user,
  //         success: req.flash('success').toString(),
  //         error: req.flash('error').toString()
  //       })
  //     })
  //   })
  // })
// 文章页
  // app.get('/u/:name/:day/:title', checkLogin);
  app.get('/u/:name/:day/:title', function(req, res) {
    User.get(req.params.name, function (err, user) {
      if (!user) {
        req.flash('error', '用户不存在!'); 
        return res.redirect('/');//用户不存在则跳转到主页
      }
      //查询并返回该用户的所有文章
      Post.getOne(req.params.name, req.params.day, req.params.title, function (err, post) {
        if(err) {
          req.flash('error', err)
          return res.redirect('/')
        }
        res.render('article', {
          title: req.params.title,
          post: post,
          user: req.session.user,
          success: req.flash('success').toString(),
          error: req.flash('error').toString()
        })
      })      
    }); 
  })
  // 评论功能
  app.post('/u/:name/:day/:title', function(req, res) {
    var date = new Date()
    var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes())
    var comment = {
      name: req.body.name,
      email: req.body.email,
      website: req.body.website,
      time: time,
      content: req.body.content
    }
    var newComment = new Comment(req.params.name, req.params.day, req.params.title, comment)
    newComment.save(function(err) {
      if(err) {
        req.flash('error', err)
        return res.redirect('back')
      }
      req.flash('success', '留言成功')
      res.redirect('back')
    })

  })



  app.get('/edit/:name/:day/:title', checkLogin);
  app.get('/edit/:name/:day/:title', function(req, res) {
    var currentUser = req.session.user
    Post.edit(currentUser.name, req.params.day, req.params.title, function (err, post) {
      if(err) {
        req.flash('error', err)
        return res.redirect('back')
      }
      res.render('edit', {
        title: '编辑文档',
        post: post,
        user: req.session.user,
        success: req.flash('success').toString(),
        error: req.flash('error').toString()
      })
    })      
  })
  app.post('/edit/:name/:day/:title', checkLogin);
  app.post('/edit/:name/:day/:title', function(req, res) {
    var currentUser = req.session.user
    Post.update(currentUser.name, req.params.day, req.params.title, req.body.post, function (err) {
      var url = encodeURI('/u/' + req.params.name + '/' + req.params.day + '/' + req.params.title)
      if(err) {
        req.flash('error', err)
        return res.redirect(url)
      }
      req.flash('success', '修改成功')
      res.redirect(url)
    })      
  })
  app.get('/remove/:name/:day/:title', checkLogin);
  app.get('/remove/:name/:day/:title', function(req, res) {
    console.log('文档删除中')
    var currentUser = req.session.user
    Post.remove(currentUser.name, req.params.day, req.params.title, function (err) {
      if(err) {
        req.flash('error', err)
        return res.redirect('back')
      }
      req.flash('success', '删除成功')
      res.redirect('/')
    })      
  })



  // 检测用户是否登录
  function checkLogin(req, res, next) {
    if(!req.session.user) {
      req.flash('error', '未登录')
      res.redirect('/login')
    }
    next()
  }

  // 检测用户是否登录
  function checkNotLogin(req, res, next) {
    if(req.session.user) {
      req.flash('error', '已登录')
      res.redirect('back')
    }
    next()
  }
}
