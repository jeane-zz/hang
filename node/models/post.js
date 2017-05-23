var mongodb = require('./db')

function Post(name, title, post) {
	this.name = name
	this.title = title
	this.post = post
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
		post: this.post
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

Post.get = function (name, callback) {
	mongodb.open(function (err, db) {
		console.log("post数据库打开1， 时间")
		if(err) {
			mongodb.close()
			return callback(err)
		}
		db.collection('posts', function (err, collection) {
			console.log("post数据库打开2， 时间")
			if(err) {
				mongodb.close()
				return callback(err)
			}

			var query = {}
			if(name) {
				query.name = name
			}

			collection.find(query).sort({
				time: -1
			}).toArray(function (err, docs) {
				console.log("post数据库打开3， 时间")
				mongodb.close()
				if(err){
					return callback(err)
				}
				callback(null, docs)
			})
		})
	})
}