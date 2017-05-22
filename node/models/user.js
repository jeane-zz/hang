var mongodb = require('./db')

function User(user) {
	this.name = user.name
	this.password = user.password
	this.email = user.email
}

module.exports = User

User.prototype.save = function (callback) {
	var user = {
		name: this.name,
		password: this.password,
		email: this.email
	}

	mongodb.open(function (err, db) {
		console.log('db is open 1')
		if(err) {
			console.log('db is close6')
			mongodb.close();
			return callback(err)
		}

		db.collection('users', function(err, collection) {
			if(err) {
				console.log('db is close1')
				mongodb.close()
				return callback(err)
			}
			collection.insert(user, {
				safe: true
			}, function (err, user) {
				console.log('db is close2')
				mongodb.close()
				if(err) {
					return callback(err)
				}
				callback(null, user[0])
			})		
		})
	})

}

User.get = function(name, callback) {
	mongodb.open(function(err, db) {
		console.log('db is open 2')
		if(err) {
			console.log('db is close5')
			mongodb.close();
			return callback(err)
		}
		db.collection('users', function(err, collection) {
			if(err) {
				console.log('db is close3')
				mongodb.close()
				return callback(err)
			}
			collection.findOne({
				name
			}, function (err, user) {
				console.log('db is close4')
				mongodb.close()
				if(err) {
					return callback(err)
				}
				callback(null, user)
			})
		})
	})

}