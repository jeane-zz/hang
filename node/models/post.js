var mongodb = require('./db')
var markdown = require('markdown').markdown

function Post(name, title, post, tags) {
	this.name = name
	this.title = title
	this.post = post
	this.tags = tags
}

module.exports = Post

Post.prototype.save = function (callback) {
	var date = new Date()
	var time = {
		date: date,
		year: date.getFullYear(),
		month: date.getFullYear() + '-' + (date.getMonth() + 1),
		day: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(),
		minute: date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes())
	}
	console.log("打印时间测试：" + time)
	var post = {
		name: this.name,
		time: time,
		title: this.title,
		post: this.post,
		comments: [],
		tags: this.tags
	}
	console.log("打印post测试：" + post)
	mongodb.open(function (err, db) {
		if(err) {
			mongodb.close()
			return callback(err)
		}

		db.collection('posts', function (err, collection) {
			if(err) {
				mongodb.close()
				return callback(err)
			}
			collection.insert(post, {
				safe: true
			}, function (err) {
				console.log('插入数据成功' + post)
				mongodb.close()
				if(err) {
					return callback(err)
				}
				callback(null)
			})
		})
	})
}

Post.getTen = function (name, page, callback) {
	mongodb.open(function (err, db) {
		if(err) {
			mongodb.close()
			return callback(err)
		}
		db.collection('posts', function (err, collection) {
			if(err) {
				mongodb.close()
				return callback(err)
			}

			var query = {}
			if(name) {
				query.name = name
			}

			collection.count(query, function (err, total) {
				collection.find(query, {
					skip: (page - 1) * 10,
					limit: 10
				}).sort({
					time: -1
				}).toArray(function (err, docs) {
					mongodb.close()
					if(err){
						return callback(err)
					}
					docs.forEach(function (doc) {
						doc.post = markdown.toHTML(doc.post)
					})
					callback(null, docs, total)
				})
			})
		})
	})
}
// Post.getAll = function (name, callback) {
// 	mongodb.open(function (err, db) {
// 		console.log("post数据库打开1， 时间")
// 		if(err) {
// 			mongodb.close()
// 			return callback(err)
// 		}
// 		db.collection('posts', function (err, collection) {
// 			console.log("post数据库打开2， 时间")
// 			if(err) {
// 				mongodb.close()
// 				return callback(err)
// 			}

// 			var query = {}
// 			if(name) {
// 				query.name = name
// 			}

// 			collection.find(query).sort({
// 				time: -1
// 			}).toArray(function (err, docs) {
// 				console.log("post数据库打开3， 时间")
// 				mongodb.close()
// 				if(err){
// 					return callback(err)
// 				}
// 				docs.forEach(function (doc) {
// 					doc.post = markdown.toHTML(doc.post)
// 				})
// 				callback(null, docs)
// 			})
// 		})
// 	})
// }
Post.getOne = function(name, day, title, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 posts 集合
    db.collection('posts', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //根据用户名、发表日期及文章名进行查询
      collection.findOne({
        "name": name,
        "time.day": day,
        "title": title
      }, function (err, doc) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        //解析 markdown 为 html
        if(doc) {
        	doc.post = markdown.toHTML(doc.post);
        	doc.comments.forEach(function (comment) {
        		comment.content = markdown.toHTML(comment.content)
        	})	
        }
        callback(null, doc);//返回查询的一篇文章
      });
    });
  });
};


Post.edit = function(name, day, title, callback) {
	mongodb.open(function(err, db) {
		if(err) {
			mongodb.close()
			return callback(err)
		}

		db.collection('posts', function (err, collection) {
			if(err) {
				mongodb.close()
				return callback(err)
			}
			collection.findOne({
				"name": name,
				"time.day": day,
				"title": title
			}, function(err, doc) {
				mongodb.close()
				if(err) {
					return callback(err)
				}
				callback(null, doc)
			})
		})
	})
}
Post.update = function(name, day, title, post, callback) {
	mongodb.open(function(err, db) {
		if(err) {
			mongodb.close()
			return callback(err)
		}

		db.collection('posts', function (err, collection) {
			if(err) {
				mongodb.close()
				return callback(err)
			}
			collection.update({
				"name": name,
				"time.day": day,
				"title": title
			},{
				$set: {post: post}
			}, function(err, doc) {
				mongodb.close()
				if(err) {
					return callback(err)
				}
				callback(null, doc)
			})
		})
	})
}

Post.remove = function(name, day, title, callback) {
	mongodb.open(function(err, db) {
		if(err) {
			mongodb.close()
			return callback(err)
		}

		db.collection('posts', function (err, collection) {
			if(err) {
				mongodb.close()
				return callback(err)
			}
			collection.remove({
				"name": name,
				"time.day": day,
				"title": title
			},{
				w: 1
			}, function(err, doc) {
				mongodb.close()
				if(err) {
					return callback(err)
				}
				callback(null, doc)
			})
		})
	})
}

Post.getArchive = function(callback) {
	mongodb.open(function(err, db) {
		if(err) {
			mongodb.close()
			return callback(err)
		}

		db.collection('posts', function (err, collection) {
			if(err) {
				mongodb.close()
				return callback(err)
			}
			collection.find({}, {
				"name": 1,
				"time": 1,
				"title": 1
			}).sort({
				time: -1
			}).toArray(function(err, docs) {
				mongodb.close()
				if(err) {
					return callback(err)
				}
				callback(null, docs)
			})
		})
	})
}