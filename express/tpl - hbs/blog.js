var entries = [
	{
		"id": 1, 
		"title": "article 1",
		"body": "article 1",
		"published": "3/5/2017"
	},
	{
		"id": 2, 
		"title": "article 2",
		"body": "article 2",
		"published": "3/5/2017"
	},
	{
		"id": 3, 
		"title": "article 3",
		"body": "article 3",
		"published": "3/5/2017"
	},
	{
		"id": 4, 
		"title": "article 4",
		"body": "article 4",
		"published": "3/5/2017"
	},
	{
		"id": 5, 
		"title": "article 5",
		"body": "article 5",
		"published": "3/5/2017"
	},
	{
		"id": 6, 
		"title": "article 6",
		"body": "article 6",
		"published": "3/5/2017"
	},
]

exports.getBlogEntries = function () {
	return entries
}

exports.getBlogEntry = function (id) {
	// id = parseInt(id)
	for(var i = 0; i < entries.length; i++) {
		// console.log('this is ' + i)
		if(entries[i].id == id) {
			return entries[i]
		}
	}
}