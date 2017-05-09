var ZhangDZ = {
	/* 
	 * 函数名称：chunk
	 * 函数功能：将一个一维数组切割成二维数组，末尾数组长度不要求
	 * 参数：
	 * arr：即将被分割的一维数组
	 * num：分割后的内层数组的长度；
	 * 返回值：新的二维数组
	 * 示例 ：
	 * 输入：chunk(['a', 'b', 'c', 'd'],2)
	 * 输出：[['a', 'b'], ['c', 'd']]
	 */
	chunk : function(arr,num){
		var result = [];
		var i , j = 0, resarr = [];;
		for ( i = 0; i < arr.length; ) {
			while(j++ < num && arr[i]){
				resarr.push(arr[i++]);
			}
			result.push(resarr);
			j = 0;
			resarr = [];
		}

		return result;
	},
	/*
	 * 函数名称：compact
	 * 函数功能：移除数组中布尔值为false的元素
	 * 参数：
	 * arr：包含布尔值为false的元素一维数组
	 * 返回值：布尔值均为true的数组
	 * 示例 ：
	 * 输入：compact(['a', 'b', '' , false 'c', 0 , 'd'])
	 * 输出：['a', 'b', 'c', 'd']
	 */
	compact : function(arr){
		var result = [];
		for (var i = 0; i < arr.length; i++) {
			if( arr[i] ){
				result.push(arr[i]);
			}
		}
		return result;
	},
	/*
	 * 函数名称：concat
	 * 函数功能：创建一个数组，将其他数组或者值拼接起来
	 * 参数：
	 * arr：需要拼接的数组
	 * 返回值：拼接好的数组
	 * 示例 ：
	 * 输入：concat(['a', 'b'],2 , [false] ])
	 * 输出：[['a', 'b'], 2, [false]]
	 */
	concat : function(arr ){
		var result = [];
		for (var i = 0; i < arguments.length; i++) {
			if( arguments[i] instanceof Array ){
				for(var j = 0; j < arguments[i].length; j++){
					result.push(arguments[i][j]);
				}
			}else{
				result.push(arguments[i]);
			}
			
		}
		return result;
	},
	/*
	 * 函数名称：difference
	 * 函数功能：创建一个数组，比较第一个参数数组与第二个参数数组的不同，并输出
	 * 参数：
	 * arr：被比较数组 、参照数组
	 * 返回值：操作数组与参照数组的不同
	 * 示例 ：
	 * 输入：difference([1,3,2], [2,4] ])
	 * 输出：[1,3]
	 */
	difference : function(arr){
		var result = [], temp = [], i , j , k,flag ;
		for(i = 0; i < arguments[0].length;i++){
			flag = 1;
			for(j = 1; j < arguments.length; j++){
				if( arguments[j] instanceof Array ){
					for (k = 0; k < arguments[j].length; k++){
						if(arguments[j][k] === arguments[0][i]){
							flag = 0;
							break;
						}
					}
				}else{
					if(arguments[0][i] === arguments[j]){
						flag = 0;
						break;
					}
				}	 
			}
			if(flag){
				result.push(arguments[0][i]);
			}
		}
		return result;
	},
		/*
	 * 函数名称：drop
	 * 函数功能：将数组的前num个丢出去。
	 * 参数：
	 * arr：源数组
	 * num: 从0开始被丢弃的元素个数
	 * 返回值：去掉元素后的数组
	 * 示例 ：
	 * 输入：drop([1,3,2], 2])
	 * 输出：[3]
	 */
	drop : function(arr , num){
		var result = [], i;
		if(num === undefined ){
			num = 1;
		}
		for(i = num; i < arr.length; i++){
			result.push(arr[i]);
		}
		return result;
	},
	/*
	 * 函数名称：dropRight
	 * 函数功能：将数组的后num个丢出去。
	 * 参数：
	 * arr：源数组
	 * num: 从末尾开始被丢弃的元素个数
	 * 返回值：去掉元素后的数组
	 * 示例 ：
	 * 输入：dropRight([1,3,2], 2])
	 * 输出：[1]
	 */
	dropRight : function(arr , num){
		var result = [], i;
		if(num === undefined){
			num = 1;
		}
		for(i = 0; i < arr.length - num; i++){
			result.push(arr[i]);
		}
		return result;
	},
	/*
	 * 函数名称：fill
	 * 函数功能：将数组中的元素替换掉。
	 * 参数：
	 * arr：源数组
	 * value: 替换内容
	 * start：从该位置开始替换
	 * end：替换到此位置，不包括此位置
	 * 返回值：替换元素后的数组
	 * 示例 ：
	 * 输入：fill([1,3,2], 'a'])
	 * 输出：['a','a','a']
	 */
	fill : function(arr , value , start , end ){
		var result = [], i;
		if(!start && !end){//如果没有传入首尾，则全部替换
			for(i = 0; i < arr.length ; i++){
				result.push(value);
			} 
		}
		else if( start && !end){//如果只传入了头部，则替换到尾部
			if( start < 0 ) {
				for(i = 0; i < arr.length; i++){
					if( i <=  arr.length + start ){
						result.push(value);
					}else{
						result.push(arr[i]);
					}
				}	
			}else{
				for(i = 0; i < arr.length ; i++){
					if( i >= start ){
						result.push(value);
					}else{
						result.push(arr[i]);
					}

				} 
			}

		}
		else{
			if( start < end && end < 0){
				for(i = 0; i < arr.length ; i++){
					if( i >= arr.length + start && i < arr.length + end){
						result.push(value);
					}else{
						result.push(arr[i]);
					}
					//result.push(arr[i]);
				} 
			}
			else{
				for(i = 0; i < arr.length ; i++){
					if( i >= start && i < end){
						result.push(value);
					}else{
						result.push(arr[i]);
					}
					//result.push(arr[i]);
				} 
			}
		}
		return result;
	},
	/*
	 * 函数名称：flatten
	 * 函数功能：将n维数组变成n-1维数。
	 * 参数：
	 * arr：源数组
	 * num: 从末尾开始被丢弃的元素个数
	 * 返回值：n-1数组
	 * 示例 ：
	 * 输入：flatten([1, [2, [3, [4]], 5]])
	 * 输出：[1, 2, [3, [4]], 5]
	 */
	flatten : function(arr ){
		var result = [], i;
		for (var i = 0; i < arr.length; i++) {
			if( arr[i] instanceof Array ){
				for(var j = 0; j < arr[i].length; j++){
					result.push(arr[i][j]);
				}
			}else{
				result.push(arr[i]);
			}

		}
		return result;
	},
	/*
	 * 函数名称：flattenDeep
	 * 函数功能：将n维数组变成n-1维数。
	 * 参数：
	 * arr：源数组
	 * num: 从末尾开始被丢弃的元素个数
	 * 返回值：n-1数组
	 * 示例 ：
	 * 输入：flattenDeep([1, [2, [3, [4]], 5]])
	 * 输出：[1, 2, 3, 4, 5]
	 */
	flattenDeep :  function(arr ){
		var result = [], i;
		for (var i = 0; i < arguments.length; i++) {
			if( arguments[i] instanceof Array ){
				isArray(arguments[i]);
			}else{
				result.push(arguments[i]);
			}
			
		}
		return result;

		function isArray(arr) {
			for (var i = 0; i < arr.length; i++) {
				if( arr[i] instanceof Array ){
					isArray(arr[i]);
				}else{
					result.push(arr[i]);
				}	
			}
		}
	},
	/*
	 * 函数名称：fromPairs
	 * 函数功能：将数组改写成键值对的形式。
	 * 参数：
	 * arr：包含一个名称和一个值的数组
	 * 返回值：新建的对象
	 * 示例 ：
	 * 输入：fromParis([['a', 2}, ['b', 4]])
	 * 输出：{'a':2,'b':4}
	 */
	fromPairs : function( arr ){
		var obj = {};
		for (var i = 0; i < arr.length; i++) {
			obj[arr[i][0]] = arr[i][1];
		}
		return obj;
	},

	/*
	 * 函数名称：initial
	 * 函数功能：获取数组中不是最后一个的元素
	 * 参数：
	 * arr：源数组
	 * 返回值：除去最后一个元素的数组
	 * 示例 ：
	 * 输入：initial(['a', 'b', '' , false 'c', 0 , 'd'])
	 * 输出：['a', 'b', '' , false 'c', 0 ]
	 */
	initial : function(arr){
		var result = [];
		for (var i = 0; i < arr.length-1; i++) {
				result.push(arr[i]);
		}
		return result;
	},
	/*
	 * 函数名称：intersection
	 * 函数功能：创建一个数组，输出两个参数数组的交集
	 * 参数：
	 * arr：被比较数组 、参照数组
	 * 返回值：操作数组与参照数组的不同
	 * 示例 ：
	 * 输入：intersection([1,3,2], [2,4] ])
	 * 输出：[2]
	 */
	intersection : function(arr1,arr2){
		var result = [], temp = [], i , j , k,flag ;
		for(i = 0; i < arr1.length;i++){
			for(j = 0; j < arr2.length; j++){
				if(arr1[i] == arr2[j]){
					result.push(arr1[i]);
				}else{
					break;
				}	 
			}
			
		}
		return result;
	},
	/*
	 * 函数名称：pull
	 * 函数功能：去掉数组中与value相等的元素
	 * 参数：
	 * arr：源数组
	 * 返回值：除去值为value的元素的数组
	 * 示例 ：
	 * 输入：pull(['a', 'b', 'a' , 'c', 'c', 0 , 'd'],'a','c')
	 * 输出：['b',0,'d']
	 */
	pull : function(arr ){
		var result = [], i, j , flag;
		for (i = 0; i < arr.length; i++) {
			flag = 1;
			for(j = 1; j < arguments.length; j++){
				if(arguments[j] == arr[i]){
					flag = 0;
					break;
				}
			}
			if(flag){
				result.push(arr[i]);
			}
		}
		
		return result;
	},
	/*
	 * 函数名称：pullAll
	 * 函数功能：去掉数组中与value相等的元素
	 * 参数：
	 * arr1：源数组
	 * arr2：包含value的数组
	 * 返回值：除去值为value的元素的数组
	 * 示例 ：
	 * 输入：pullAll(['a', 'b', 'a' , 'c', 'c', 0 , 'd'],['a','c'])
	 * 输出：['b',0,'d']
	 */
	pullAll : function(arr1 , arr2 ){
		var result = [], i, j , flag;
		for (i = 0; i < arr1.length; i++) {
			flag = 1;
			for(j = 0; j < arr2.length; j++){
				if(arr2[j] == arr1[i]){
					flag = 0;
					break;
				}
			}
			if(flag){
				result.push(arr1[i]);
			}
		}
		return result;
	},
	/*
	 * 函数名称：pullAt
	 * 函数功能：去掉数组中index对应位置的元素
	 * 参数：
	 * arr1：源数组
	 * index：数组的某个位置
	 * 返回值：除去值为value的元素的数组
	 * 示例 ：
	 * 输入：pullAt(['a', 'b', 'a' , 'c', 'c', 0 , 'd'],[1,3,4,6])
	 * 输出：['b','c','d']
	 */
	pullAt : function(arr , index ){
		var result = [], i, j, flag;
		for (i = 0; i < arr.length; i++) {
			flag = 1;
			for (var j = 0; j < index.length; j++) {
				if(i == index[j] - 1){
					flag =  0;
					break;
				}
			}
			if(flag){
				result.push(arr[i]);
			}
		}
		return result;
	},
	/*
	 * 函数名称：reverse
	 * 函数功能：将数组反序输出
	 * 参数：
	 * arr：源数组
	 * 返回值：反序后的数组
	 * 示例 ：
	 * 输入：pullAt(['a', 'b',  'c'])
	 * 输出：['c','b','a']
	 */
	reverse : function(arr  ){
		var result = [], i, j , flag;
		for (i = 0; i < arr.length; i++) {
			result.unshift(arr[i]);
		}
		return result;
	},
	/*
	 * 函数名称：indexOf
	 * 函数功能：在数组中找到某个值，并返回其index
	 * 参数：
	 * arr：源数组
	 * 返回值：value所对应的index，若不匹配，则返回-1
	 * 示例 ：
	 * 输入：indexOf(['a', 'b',  'c'],'a')
	 * 输出：0
	 */
	indexOf : function(arr ,value ,start){
		var result , i, j , flag;
		if(start == undefined){
			start = 0;
		}
		flag = 0;
		for (i = start; i < arr.length; i++) {
			if(arr[i] == value){
				result = i;
				flag = 1;
				break;
			}
		}
		if(!flag){
			result = -1;
		}
		
		return result;
	},
	/*
	 * 函数名称：split
	 * 函数功能：在给定的分割符位置处将string切开，切成由num确定的段数，如果切开段数大于num，大于部分将舍弃
	 * 参数：
	 * str：需要切割的字符串
	 * separator：规定的分割符
	 * num：确定需要切割的段数
	 * 返回值：存放字符串的数组
	 * 示例 ：
	 * 输入：split('a-bbb-c','-')
	 * 输出：['a','bbb','c']
	 */
	split : function(str ,separator ,num){
		var result = [], i, j , temp = '';
		for(i = 0; i < str.length; i++){
			if(separator == ""){
				result.push(str[i]);
			}
			else{
				if( str[i] == separator ){
					result.push(temp);
					temp = '';
				}else{
					temp += str[i];
				}
			}
		}
		if(temp){ //处理最后一截不会再遇到分割符的情况
			result.push(temp);
		}
		if(num && num >= 1){//如果有分割段数的要求
			while(num < result.length){
				result.pop(length - 1 , 1);
			}
		//	return result;
		}/*else{
			return result;
		}*/
		return result;
	},
	/*
	 * 函数名称：tail
	 * 函数功能：将数组的第一个元素去掉
	 * 参数：
	 * arr：需要处理的数组
	 * 返回值：去掉第一个元素的数组
	 * 示例 ：
	 * 输入：tail(['a','b','c','-')
	 * 输出：['b','c','-']
	 */
	tail : function(arr){
		var result = [], i, j ;
		for(i = 1; i < arr.length; i++){
			result.push(arr[i]);	
		}
		return result;
	},
	/*
	 * 函数名称：map
	 * 函数功能：将数组的每个值作为参数传给函数，并返回函数执行的结果
	 * 参数：
	 * arr：需要操作的数组
	 * function：处理程序
	 * 返回值：返回处理结果
	 * 示例 ：
	 * 输入：map([1,2,3,4,5],function (x) {
		console.log(arguments[2]);
		return 3 * arguments[0] + 5;
	})
	 * 输出：[8,11,14,17,20]
	 */
	map : function(collection , fn ) {
		var result =[], i;
		for(key in collection){
			if(fn instanceof Function){
				result.push( fn(collection[key],i,collection) );
			}
			else if(typeof fn == "string" ){
				if(fn.indexOf('.') == -1){
					result.push(collection[key][fn]);
				}else{
					var s = fn.split('.');
					if(collection[key] instanceof Object){
						innerkey(collection[key]);
					}else{
						if(collection[key] == s[1] && collection == s[0]){
							result.push(collection[key][keyinner]);
						}
						
					}

					/*for(var keyinner in collection[key]){
						if(keyinner == s[0])
						result.push(collection[key][keyinner]);
					}
	*/
					/*var m = s[0];
					var n = s[1];
					result.push(collection[key].m);*/
				}
				
			}
		}
		function innerkey(obj) {
			for(var key in obj){
				if( obj[key] instanceof Object){
					innerkey(obj[key])
				}
				else{
					result.push(obj[key]);
				}

			}
		}
		/*if(fn instanceof Function){
			for (var i = 0; i < collection.length; i++) {
				result.push( fn(collection[i],i,collection) );
			}
		}
		
			for (var i = 0; i < collection.length; i++) {
				result.push( fn(collection[fn],i,collection) );
			}
		}*/

		return result;
	},
	/*
	 * 函数名称：filter
	 * 函数功能：将数组的每个值作为参数传给函数，并返回值为真的结果，满足条件即输出出来
	 * 参数：
	 * arr：需要操作的数组
	 * function：处理程序
	 * 返回值：返回处理结果
	 * 示例 ：
	 * 输入：filter([1,2,3,4,5],function (x) {if(x%2)return true;})
	 * 输出：[11,17]
	 */
	filter : function (collection , predicate) {//代码来自 every
		var result = [], i, j = 0, arr =[] , flag ;
		if(predicate == undefined){
			bealoon = function (n) {
				return n;
			}
		}
		if(predicate instanceof Function){ //函数
			for(i = 0; i < collection.length; i++){
				if( predicate(collection[i]) ){
					result.push(collection[i]);
				}
			}
		}
		else if(typeof predicate === "string"){//字符串
			for(i = 0; i < collection.length; i++){
				if( collection[i][predicate] ){
					result.push(collection[i]);
				}
			}
		}
		else if(predicate instanceof Array){//数组
			for(i = 0; i < collection.length; i++){
				if(collection[i][predicate[0]] == predicate[1]){
					result.push(collection[i]);
				}
				
			}
		}
		else if(predicate instanceof Object){//对象
			for(var key in predicate){
				arr[j++] = key;
			}
			for(i = 0; i < collection.length; i++){
				flag = true;
				for(j = 0; j < arr.length; j++){
					if(collection[i][arr[j]] != predicate[arr[j]]){
						flag = false;
						break;
					}
				}
				if(flag){
					result.push(collection[i]);
				}
			}
		}
		return result;
	},

	/*
	 * 函数名称：patition
	 * 函数功能：将数组的每个值作为参数传给函数，并返回函数执行的结果
	 * 参数：
	 * arr：需要操作的数组
	 * function：处理程序
	 * 返回值：返回处理结果
	 * 示例 ：
	 * 输入：patition([1,2,3,4,5],function (x) {
		console.log(arguments[2]);
		return 3 * arguments[0] + 5;
	})
	 * 输出：[8,11,14,17,20]
	 */
	partition : function(collection , fn ) {
		var result1 = [], result2 = [], result =[], i;
		for (var key in collection) {
			if(fn instanceof Function){
				if(fn(collection[key]) ){
					result1.push( collection[key]);
				}else{
					result2.push(collection[key]);
				}
			}else if(typeof fn == "string"){
				if(collection[key][fn]){
					result1.push( collection[key]);
				}else{
					result2.push(collection[key]);
				}
			}
			else if(fn instanceof Array){
				if(collection[key][fn[0]] == fn[1]){
					result1.push( collection[key]);
				}else{
					result2.push(collection[key]);
				}
			}
			else if(fn instanceof Object ){
				var flag = true;
				for(var keys in fn){
					if(collection[key][keys] !== fn[keys]){
						flag = false; 
					}
				}
				if(flag){
					result1.push( collection[key]);
				}else{
					result2.push(collection[key]);
				}
			}
		}
		result.push(result1);
		result.push(result2);
		return result;
	},

	/*
	 * 函数名称：take
	 * 函数功能：将数组的前num个元素去掉
	 * 参数：
	 * arr：需要处理的数组
	 * num：需要取出的元素个数
	 * 返回值：取出的元素
	 * 示例 ：
	 * 输入：take(['a','b','c'],2)
	 * 输出：['a','b']
	 */
	take : function(arr ,num){
		var result = [], i, j ;
		if(num == undefined){
			num = 1;
		}else if(num > arr.length){
			num =arr.length;
		}
		for(i = 0; i < num; i++){
			result.push(arr[i]);	
		}
		return result;
	},
	/*
	 * 函数名称：takeRight
	 * 函数功能：将数组的后面num个元素去掉
	 * 参数：
	 * arr：需要处理的数组
	 * num：需要取出的元素个数
	 * 返回值：取出的元素
	 * 示例 ：
	 * 输入：takeRight(['a','b','c'],2)
	 * 输出：['b','c']
	 */
	takeRight : function(arr ,num){
		var result = [], i, j ;
		if(num == undefined){
			num = 1;
		}else if(num > arr.length){
			num = arr.length;
		}
		for(i = arr.length - num; i < arr.length ; i++){
			result.push(arr[i]);	
		}
		return result;
	},
	/*
	 * 函数名称：union
	 * 函数功能：取两个数组的并集并去重
	 * 参数：
	 * arr1：子数组
	 * arr2：子数组
	 * 返回值：并集
	 * 示例 ：
	 * 输入：union(['a','b','c'],['a'])
	 * 输出：['a','b','c']
	 */
	union : function(arr1,arr2 ){
		var result = [], i, j ,flag;
		for ( i = 0; i < arguments.length; i++) {
			for(j = 0; j < arguments[i].length; j++){
				if(hasAlready(result,arguments[i][j])){
					result.push(arguments[i][j]);
				}
			}
		}
		return result;
		function hasAlready(res , a) {
			for(var i = 0; i < res.length; i++){
				if(a == res[i]){
					return false;
				}
			}
			return true;
		}
	},
	/*
	 * 函数名称：uniq
	 * 函数功能：数组去重
	 * 参数：
	 * arr：需要操作的数组
	 * 返回值：没有重复值的数组
	 * 示例 ：
	 * 输入：uniq(['a','b','c','a'])
	 * 输出：['a','b','c']
	 */
	uniq :function(arr ){
		var result = [], i, j ,flag;
		for(i = 0; i < arr.length; i++){
			result.push(arr[i]);		
		}
		for(j = 0; j < result.length; j++){
			for(i = j + 1; i < result.length; i++){
				if(result[i] == result[j]){
					result.splice(i,1);
				}
			}	
		}
		return result;
	},
	/*
	 * 函数名称：zip
	 * 函数功能：元素汇总
	 * 参数：
	 * arr1：需要操作的数组
	 * arr2：需要操作的数组2
	 * 返回值：归类好的数组
	 * 示例 ：
	 * 输入：zip(['a','b'],[1,2],[true,false])
	 * 输出：['a',1, true],['b',2,false]
	 */
	zip :function(arr1 ,arr2){
		var result = new Array(arguments[0].length), i, j ,flag;
		for(j = 0; j < result.length; j++){
				result[j] = new Array(arguments.length);
			}
		for(j = 0; j < arguments[0].length; j++){
			for(i = 0; i < arguments.length; i++){
			
				result[j][i] = arguments[i][j];
			}
		}
		return result;
	},

	/*
	 * 函数名称：unzip
	 * 函数功能：元素归类
	 * 参数：
	 * arr1：需要操作的数组
	 * arr2：需要操作的数组2
	 * 返回值：归类好的数组
	 * 示例 ：
	 * 输入：unzip(['a',1, true],['b',2,false])
	 * 输出：['a','b'],[1,2],[true,false]
	 */
	unzip : function(arr){//与zip的代码一模一样？？？？//
		var result = new Array(arr[0].length), i, j ,flag;
		for(j = 0; j < result.length; j++){
				result[j] = new Array(arr.length);
			}
		for(j = 0; j < arr[0].length; j++){
			for(i = 0; i < arr.length; i++){
				result[j][i] = arr[i][j];
			}
		}
		return result;
	},
	/*
	 * 函数名称：without
	 * 函数功能：找出与所有value值不同的数组元素
	 * 参数：
	 * arr：需要操作的数组
	 * value：提供作为参考的值
	 * 返回值：与所有value都不同的数组元素
	 * 示例 ：
	 * 输入：without([2, 1, 2, 3], 1, 2)
	 * 输出：[3]
	 */
	without : function(arr ,value){
		var result = [], i, j ,flag;
		for(i = 0; i < arr.length; i++){
			flag = 1;
			for(j = 1; j < arguments.length; j++){
				if(arr[i] === arguments[j]){
					flag = 0;
					break;
				}			
			}
			if(flag){
				result.push(arr[i]);
			}
		}
		return result;
	},
	/*
	 * 函数名称：xor
	 * 函数功能：找出不同时在两个数组中的元素
	 * 参数：
	 * arr1：需要操作的数组
	 * arr2：数组2
	 * 返回值：不同时在两个数组中的元素
	 * 示例 ：
	 * 输入：xor([2, 1],[2, 3])
	 * 输出：[1,3]
	 */
	xor : function(arr1,arr2 ){//在union代码上简单修改//
		var result = [], i, j ,flag;
		for(i = 0; i < arr1.length; i++){
			result.push(arr1[i]);	
		}
		for(i = 0; i < arr2.length; i++){
			flag = 1;
			for(j = 0; j < arr1.length; j++){
				if(arr2[i] == arr1[j]){
					result.splice(j,1);//difference from union???
					flag = 0;
					break;
				}
			}
			if(flag){
				result.push(arr2[i]);
			}
		}
		return result;
	},

	/*
	 * 函数名称：camelCase
	 * 函数功能：将一个字符串改写为驼峰式
	 * 参数：
	 * str：源字符串
	 * 返回值：去掉所有修饰符的驼峰式字符串
	 * 示例 ：
	 * 输入：camelCase('Foo Bar')
	 * 输出：fooBar
	 */
	camelCase : function(str){//在union代码上简单修改//
		var result = '', i, j ,flag;
		for(i = 0; i < str.length; i++){
			if(isAlpha(str[i])){
				if( isAlpha(str[i-2]) &&  !isAlpha(str[i-1]) &&  isAlpha(str[i]) ){
					result += str[i].toUpperCase();
				}
				else{
					result += str[i].toLowerCase();
				}
				
			}
			//if((str[i] >= 'A' && str[i] <='Z') ||(str[i] >= 'a' && str[i] <='z')){
			//	txt += str[i];
			//}
		}
		//var result = txt;/*.toLowerCase()*/
		return result;

		function isAlpha( a ){
			if((a >= 'A' && a <='Z') ||(a >= 'a' && a <='z')){
				return true;
			}
			else{
				return false;
			}
		}
	},
	/*
	 * 函数名称：capitalize
	 * 函数功能：字符串首字母大写
	 * 参数：
	 * str：源字符串
	 * 返回值：首字母大写字符串
	 * 示例 ：
	 * 输入：capitalize('FooBar')
	 * 输出：Foobar
	 */
	capitalize : function(str){//在union代码上简单修改//
		var result = '', i, j ,flag;
		for(i = 0; i < str.length; i++){
			if(isAlpha(str[i])){
				if( result.length == 0){
					result += str[i].toUpperCase();
				}
				else{
					result += str[i].toLowerCase();
				}
				
			}
		}
		return result;

		function isAlpha( a ){
			if((a >= 'A' && a <='Z') ||(a >= 'a' && a <='z')){
				return true;
			}
			else{
				return false;
			}
		}
	},
	/*
	 * 函数名称：every
	 * 函数功能：判断数组的每个元素是否为真值
	 * 参数：
	 * arr：需要判断的数组
	 * 返回值：若数组元素均为真，则返回true
	 * 示例 ：
	 * 输入：every(['FooBar'])
	 * 输出：true
	 */
	every : function(collection,predicate){
		//var result = true,i;
		var i ,j = 0, arr =[]; 
		if(predicate == undefined){
			bealoon = function (n) {
				return n;
			}
		}
		if(predicate instanceof Function){ //函数
			for(i = 0; i < collection.length; i++){
				if( ! predicate(collection[i]) ){
					return false;
				}
			}
		}
		else if(typeof predicate === "string"){//字符串
			for(i = 0; i < collection.length; i++){
				if( ! collection[i][predicate] ){
					return false;
				}
			}
		}
		else if(predicate instanceof Array){//数组
			for(i = 0; i < collection.length; i++){
				if(collection[i][predicate[0]] != predicate[1]){
					return false;
				}
				
			}
		}
		else if(predicate instanceof Object){//对象
			for(i = 0; i < collection.length; i++){
				for(var key in predicate){
					arr[j++] = key;
				}
				for(j = 0; j < arr.length; j++){
					if(collection[i][arr[j]] != predicate[arr[j]]){
						return false;
					}
				}
			}
		}
		return true;
	},

	/*
	 * 函数名称：some
	 * 函数功能：判断数组的某个元素为真则为真
	 * 参数：
	 * arr：需要判断的数组
	 * 返回值：若数组某个元素均为真，则返回true
	 * 示例 ：
	 * 输入：some(['FooBar'])
	 * 输出：true
	 */
	some : function (collection , predicate) {//代码来自 reject
		var flag ;
		if(predicate == undefined){
			bealoon = function (n) {
				return n;
			}
		}

		for(key in collection){
			if(predicate instanceof Function){ //函数
				if( predicate(collection[key]) ){
					return true;
				}
			}
			else if(typeof predicate === "string"){//字符串
				if( collection[key][predicate] ){
					return true;
				}
			}
			else if(predicate instanceof Array){//数组
				if(collection[key][predicate[0]] == predicate[1]){
					return true;
				}
				
			}
			else if(predicate instanceof Object){//对象
				flag = true;
				for(var keys in predicate){
					if(collection[key][keys] !== predicate[keys]){
						flag = false;
						break;
					}
				}
				if(flag){
					return true;
				}
			}
		}
		return false;	
	},

	/*
	 * 函数名称：last
	 * 函数功能：返回数组的最后一个元素
	 * 参数：
	 * arr：源数组 
	 * 示例 ：
	 * 输入：last(['a', 'b', 'c'])
	 * 输出：'c'
	 */
	last : function(arr){
		var result = arr[arr.length - 1];
		return result;
	},

	/*
	 * 函数名称：lastIndexOf
	 * 函数功能：在数组中找到某个值，并返回其index
	 * 参数：
	 * arr：源数组
	 * 返回值：value所对应的index，若不匹配，则返回-1
	 * 示例 ：
	 * 输入：lastIndexOf(['a', 'b',  'c','a'],'a')
	 * 输出：3
	 */
	lastIndexOf : function(arr ,value ,start){
		var result , i, j , flag;
		if(start == undefined){
			start = arr.length;
		}
		flag = 0;
		for (i = start; i > 0; i--) {
			if(arr[i] == value){
				result = i;
				flag = 1;
				break;
			}
		}
		if(!flag){
			result = -1;
		}
		return result;
	},
	/*
	 * 函数名称：lowerCase
	 * 函数功能：将字符串改写为小写形式
	 * 参数：
	 * str：源字符串 
	 * 示例 ：
	 * 输入：lowerCase('-Foo_Bar')
	 * 输出：foo bar
	 */
	lowerCase : function(str){
		var result = '', i, j ,flag;
			for(i = 0; i < str.length; i++){
				if(isAlpha(str[i])){
					if(isAlpha(str[i]) && !isAlpha(str[i - 1]) && isAlpha(str[i - 2]) || (str[i] >= 'A' && str[i] <='Z' && str[i - 1] >= 'a' && str[i - 1] <='z')){
						result += ' '+str[i].toLowerCase();
					}
					else{
						result += str[i].toLowerCase();
					}
				}
			}
			return result;
			function isAlpha( a ){
				if((a >= 'A' && a <='Z') ||(a >= 'a' && a <='z')){
					return true;
				}
				else{
					return false;
				}
			}
	},

	/*
	 * 函数名称：lowerFirst
	 * 函数功能：字符串首字母小写
	 * 参数：
	 * str：源字符串
	 * 返回值：首字母小写字符串
	 * 示例 ：
	 * 输入：lowerFirst('FooBar')
	 * 输出：fooBar
	 */
	lowerFirst : function(str){
		var result = '', i, j ,flag;
		for(i = 0; i < str.length; i++){
			if(isAlpha(str[i])){
				if( result.length == 0){
					result += str[i].toLowerCase();
				}
				else{
					result += str[i];
				}
				
			}
		}
		return result;

		function isAlpha( a ){
			if((a >= 'A' && a <='Z') ||(a >= 'a' && a <='z')){
				return true;
			}
			else{
				return false;
			}
		}
	},
	/*
	 * 函数名称：nth
	 * 函数功能：返回数组第nth个元素
	 * 参数：
	 * arr：源数组
	 * n：索引n 
	 * 示例 ：
	 * 输入：nth(['a', 'b', 'c'])
	 * 输出：'a'
	 */
	nth : function(arr , n){
		var result;
		if(n == undefined){
			n = 0;
		}
		if( n >= 0 && n < arr.length){
			result = arr[n];
		}
		else if( n < 0){
			result = arr[arr.length + n];
		}
		return result;
	},

	/*
	 * 函数名称：head
	 * 函数功能：返回数组的第一个元素
	 * 参数：
	 * str：源字符串
	 * 返回值：第一个元素
	 * 示例 ：
	 * 输入：head('FooBar')
	 * 输出：F
	 */
	head : function(str){
		var result ;
		if(str[0]){
			result = str[0];
		}
		else{
			result = undefined;
		}
		return result;
	},
	/*
	 * 函数名称：reduce
	 * 函数功能：对数组的元素进行连锁操作
	 * 参数：
	 * arr：需要判断的数组
	 * fn：操作元素的函数
	 * value：启动fn需要的初始参数
	 * 返回值：整个数组的计算结果
	 * 示例 ：
	 * 输入：reduce([1,2,3,4,5,6],function (a,b){return a + b;},2)
	 * 输出：23
	 */
	reduce :  function (collection,fn,value) {
		var result =[], start = 0, i ,j;
		if(collection instanceof Array){
			if(value == undefined){
				result = collection[0];
				start = 1;
			}
			else{
				result = value;
			}
			for ( i = start; i < collection.length; i++) {
				result = fn(result , collection[i]);
			}
		}else if(collection instanceof Object){
			result = {};
			for(var key in collection){
				fn(result, collection[key] , key);
			}
		}

		/*if(value){
			result = value;
			for( i = 0; i < collection.length; i++){
				result = fn(result, collection[i] );
			}
		}else{
			result = collection[0];
			for( i = 1; i < collection.length; i++){
				result = fn(result, collection[i] );
			}
		}*/
		return result;
	},
	/*
	 * 函数名称：endsWith
	 * 函数功能：判断字符串是否已某一给定字符结尾
	 * 参数：
	 * str：源字符串
	 * value：给定字符
	 * num：若给定字符不是结尾，是否在index为num的位置上
	 * 返回值：返回正确与否
	 * 示例 ：
	 * 输入：endsWith('FooBar'.'r')
	 * 输出：true
	 */
	endsWith : function(str , value ,num){
		var result =false, i, j ,flag;
		if(num == undefined){
			num = str.length;
		}
		if(value === str[num - 1]){
			result = true;
		}
		return result;
	},
	/*
	 * 函数名称：escape
	 * 函数功能：将特殊字符（&<>'''''）转化为html实体
	 * 参数：
	 * str：源字符串
	 * value：给定字符
	 * num：若给定字符不是结尾，是否在index为num的位置上
	 * 返回值：返回正确与否
	 * 示例 ：
	 * 输入：escape('FooBar'.'r')
	 * 输出：true
	 */
	escape : function(str){
		var result = '', i, j ,flag;
		for( i = 0; i < str.length; i++){
			if(str[i] == '&'){
				result += '&amp;';
			}else if(str[i] == '<'){
				result += '&lt;';
			}else if(str[i] == '>'){
				result += '&gt;';
			}else if(str[i] == '"'){
				result += '&quot;';
			}else if(str[i] == "'"){
				result += '&apos;';
			}else{
				result += str[i];
			}
		}
		return result;
	},
	/*
	 * 函数名称：escapeRegExp
	 * 函数功能：给特殊字符（&<>'''''）加上转义
	 * 参数：
	 * str：源字符串
	 * 返回值：返回转义后的字符串
	 * 示例 ：
	 * 输入：escapeRegExp('[lodash](https://lodash.com/)')
	 * 输出：'\[lodash\]\(https://lodash\.com/\)'
	 */
	escapeRegExp : function(str){
		var result = '', i, j ,flag;
		for( i = 0; i < str.length; i++){
			if(str[i] == '^' ||str[i] == '$' ||str[i] == '' ||str[i] == '.' ||str[i] == '*' ||str[i] == '+' ||str[i] == '?' ||str[i] == '(' ||str[i] == ')' ||str[i] == '[' ||str[i] == ']' ||str[i] == '{' ||str[i] == '}' ||str[i] == '|' ){
				result += '\\'+str[i];
			}else{
				result += str[i];
			}
		}
		return result;
	},
	/*
	 * 函数名称：join
	 * 函数功能：用选定字符将数组连接成字符串
	 * 参数：
	 * arr：源数组
	 * value：作为连接的字符 
	 * 示例 ：
	 * 输入：join(['a', 'b', 'c'], '~')
	 * 输出：'a~b~c'
	 */
	join : function(arr , value){
		var result = '', i, j ,flag;
		for(i = 0; i < arr.length; i++){
			if(i == 0){
				result += arr[i];
			}
			else{
				result += value + arr[i];
			}
		}
		return result;
	},
	/*
	 * 函数名称：kebabCase
	 * 函数功能：将字符串改写成山谷形式，默认使用‘-’连接
	 * 参数：
	 * str：源字符串 
	 * 示例 ：
	 * 输入：kebabCase('__FOO_BAR__')
	 * 输出：'foo-bar'
	 */
	kebabCase : function(str){
		var result = '', i, j ,flag;
		for(i = 0; i < str.length; i++){
			if(isAlpha(str[i])){
				if(isAlpha(str[i]) && !isAlpha(str[i - 1]) && isAlpha(str[i - 2]) || (str[i] >= 'A' && str[i] <='Z' && str[i - 1] >= 'a' && str[i - 1] <='z')){
					result += '-'+str[i].toLowerCase();
				}
				else{
					result += str[i].toLowerCase();
				}
			}
		}
		return result;
		function isAlpha( a ){
			if((a >= 'A' && a <='Z') ||(a >= 'a' && a <='z')){
				return true;
			}
			else{
				return false;
			}
		}
	},
	/*
	 * 函数名称：reject(filter的反函数)
	 * 函数功能：将数组的每个值作为参数传给函数，并返回值为假的结果
	 * 参数：
	 * arr：需要操作的数组
	 * function：处理程序
	 * 返回值：返回处理结果
	 * 示例 ：
	 * 输入：reject([1,2,3,4,5],function (x) {if(x%2)return true;})
	 * 输出：[2,4]
	 */
	reject : function (collection , predicate) {//代码来自 filter
		var result = [], i, j = 0, arr =[] , flag ;
		if(predicate == undefined){
			bealoon = function (n) {
				return n;
			}
		}
		if(predicate instanceof Function){ //函数
			for(i = 0; i < collection.length; i++){
				if( !predicate(collection[i]) ){
					result.push(collection[i]);
				}
			}
		}
		else if(typeof predicate === "string"){//字符串
			for(i = 0; i < collection.length; i++){
				if( !collection[i][predicate] ){
					result.push(collection[i]);
				}
			}
		}
		else if(predicate instanceof Array){//数组
			for(i = 0; i < collection.length; i++){
				if(collection[i][predicate[0]] !== predicate[1]){
					result.push(collection[i]);
				}
				
			}
		}
		else if(predicate instanceof Object){//对象
			for(var key in predicate){
				arr[j++] = key;
			}
			for(i = 0; i < collection.length; i++){
				flag = true;
				for(j = 0; j < arr.length; j++){
					if(collection[i][arr[j]] == predicate[arr[j]]){
						flag = false;
						break;
					}
				}
				if(flag){
					result.push(collection[i]);
				}
			}
		}
		return result;
	},
	/*
	 * 函数名称：pad
	 * 函数功能：返回数组第pad个元素
	 * 参数：
	 * str：源数组
	 * n：扩展后的长度n 
	 * char：填充部分的字符
	 * 示例 ：
	 * 输入：pad('abc',8)
	 * 输出：'   abc  '
	 */
	pad :  function(str , n ,char){
		var result = '', i , j = 0;
		if(char == undefined){
			char = " ";
		}
		while(result.length < n){
			result += char;
		}
		result = result.split('');
		var start = parseInt((n - str.length)/2);
		for( i = start ; i < start + str.length; i++){
			result.splice(i ,0, str[j++]) ;
			//start ++;
		}
		result.length = n;
		result = result.join('');
		return result;
	},
	/*
	 * 函数名称：padEnd
	 * 函数功能：返回数组第padEnd个元素
	 * 参数：
	 * str：源数组
	 * n：扩展后的长度n 
	 * char：填充部分的字符
	 * 示例 ：
	 * 输入：padEnd('abc',8)
	 * 输出：'   abc  '
	 */
	padEnd :  function(str , n ,char){
		var result = str, i , j = 0;
		if(char == undefined){
			char = " ";
		}
		while(result.length < n){
			result += char;
		}
		result = result.split('');
		/*var start = parseInt((n - str.length)/2);
		for( i = start ; i < start + str.length; i++){
			result.splice(i ,0, str[j++]) ;
			//start ++;
		}*/
		result.length = n;
		result = result.join('');
		return result;
	},

	/*
	 * 函数名称：padStart
	 * 函数功能：返回数组第padStart个元素
	 * 参数：
	 * str：源数组
	 * n：扩展后的长度n 
	 * char：填充部分的字符
	 * 示例 ：
	 * 输入：padStart('abc',8)
	 * 输出：'   abc  '
	 */
	padStart : function(str , n ,char){
		var result = '', i , j = 0;
		if(char == undefined){
			char = " ";
		}
		while(result.length < n){
			result += char;
		}
		result = result.split('');
		var start = n - str.length;
		for( i = start ; i < start + str.length; i++){
			result.splice(i ,0, str[j++]) ;
			//start ++;
		}
		result.length = n;
		result = result.join('');
		return result;
	},

	/*
	 * 函数名称：parseInt
	 * 函数功能：将字符串转化为数字
	 * 参数：
	 * str：源数组
	 * n：进制
	 * 示例 ：
	 * 输入：parseInt('08')
	 * 输出：8
	 */
	parseInt : function(str , n ){
		var result = 0, i ,temp = [];
		if( n == undefined ){
			n = 10 ;
		}
		for( i = str.length - 1; i >= 0 ; i--){
			temp.push(str[i] - 0);
		}
		for(i = 0; i < temp.length; i++){
			result += temp[i] * square(n , i);
		}

		return result;
		function square(x,i) {
			var sq = 1;
			for( var j = 0 ; j < i ; j++){
				sq *= x;
			}
			return sq;
		}
	},
	/*
	 * 函数名称：repeat
	 * 函数功能：将字符串重复
	 * 参数：
	 * str：源数组
	 * n：重复次数
	 * 示例 ：
	 * 输入：repeat('08',3)
	 * 输出："080808"
	 */
	repeat : function(str , n ){
		var result = '', i ,temp = [];
		if( n == undefined ){
			n = 1 ;
		}
		while(n > 0){
			result += str;
			n--;
		}
		return result;
	},

	/*
	 * 函数名称：replace
	 * 函数功能：将字符串的某部分替换
	 * 参数：
	 * str：源数组
	 * oldstr：需要替换的部分
	 * newstr：替换后的串
	 * 示例 ：
	 * 输入：replace('08','8','9')
	 * 输出："09"
	 */
	replace : function(str , oldstr ,newstr){
		var result = [], i ,temp ;
		temp = str.split(' ');// 空格有问题
		// 下面两条 hi fred 中间的空格不一样
		// console.log(replace('Hi Fred', 'Fred', 'Barney')); //160
		// console.log(replace('Hi Fred', 'Fred', 'Barney')); //32
		for (var i = 0; i < temp.length; i++) {
			if(temp[i] == oldstr){
				result.push(newstr);
			}else{
				result.push(temp[i]);
			}
		}
		result = result.join(" ");
		return result;
	},
	/*
	 * 函数名称：snakeCase
	 * 函数功能：将字符串改写成山谷形式，默认使用‘-’连接
	 * 参数：
	 * str：源字符串 
	 * 示例 ：
	 * 输入：snakeCase('__FOO_BAR__')
	 * 输出：'foo-bar'
	 */
	snakeCase : function(str){
		var result = '', i, j ,flag;
		for(i = 0; i < str.length; i++){
			if(isAlpha(str[i])){
				if(isAlpha(str[i]) && !isAlpha(str[i - 1]) && isAlpha(str[i - 2]) || (str[i] >= 'A' && str[i] <='Z' && str[i - 1] >= 'a' && str[i - 1] <='z')){
					result += '_'+str[i].toLowerCase();
				}
				else{
					result += str[i].toLowerCase();
				}
			}
		}
		return result;
		function isAlpha( a ){
			if((a >= 'A' && a <='Z') ||(a >= 'a' && a <='z')){
				return true;
			}
			else{
				return false;
			}
		}
	},

	/*
	 * 函数名称：startCase
	 * 函数功能：字符串首字母大写
	 * 参数：
	 * str：源字符串
	 * 返回值：首字母大写字符串
	 * 示例 ：
	 * 输入：startCase('FooBar')
	 * 输出：Foobar
	 */
	startCase : function(str){
		var result = '', i, j ,flag;
		for(i = 0; i < str.length; i++){
			if(isAlpha(str[i])){
				if( result.length == 0 || isAlpha(str[i]) && !isAlpha(str[i - 1]) && isAlpha(str[i - 2]) || (str[i] >= 'A' && str[i] <='Z' && str[i - 1] >= 'a' && str[i - 1] <='z')){
					if(result.length > 0){
						result += ' ';
					}
					result += str[i].toUpperCase();
				}
				else{
					result += str[i];
				}
				
			}
		}
		return result;

		function isAlpha( a ){
			if((a >= 'A' && a <='Z') ||(a >= 'a' && a <='z')){
				return true;
			}
			else{
				return false;
			}
		}
	},
	/*
	 * 函数名称：sortedIndex
	 * 函数功能：将某个值插入到已经排好序的数组
	 * 参数：
	 * arr：已经排好序的源数组
	 * value：新加的元素
	 * 返回值：新加入元素在数组中的位置
	 * 示例 ：
	 * 输入：sortedIndex([1,3,5,8],7)
	 * 输出：3
	 */
	sortedIndex : function(arr , value){
		var temp = [], i ,result ;

		for (i = 0; i < arr.length; i++) {
			if(value < arr[0]){
				result = 0;
			}else if(value > arr[arr.length-1]){
				result = arr.length;
			}
			else if(arr[i] < value && arr[i+1] >value){
				result = i + 1;
			}
		}
		
		return result;
	},
	/*
	 * 函数名称：includes
	 * 函数功能：判断字符串是否包含某一给定字符
	 * 参数：
	 * collection：源字符串、数组、对象
	 * value：给定字符
	 * index：在源数组的index位置的值是否为value;
	 * 返回值：返回正确与否
	 * 示例 ：
	 * 输入：includes('FooBar'.'r')
	 * 输出：true
	 */
	includes : function(collection , value ,index){//代码转自 endsWith
		var i , j;	
		if(collection instanceof Array){
			if(index == undefined){
				for(i = 0; i < collection.length; i++){
					if(collection[i] == value){
						return true;
					}
				}
				return false;
			}else{
				if(collection[index] == value){
					return true;
				}
				else{
					return false;
				}
			}

		}else if(typeof collection == 'string'){
			if(collection.indexOf(value) > 0){
				return true;
			}else{
				return false;
			}
		}else if(collection instanceof Object){
			for( key in collection){
				if(collection[key] == value){
					return true;
				}
			}
			return false;
		}

		//return result;
	},

	/*
	 * 函数名称：groupBy
	 * 函数功能：根据已知函数或属性对数组内容分类
	 * 参数：
	 * arr：源数组
	 * fun：对数组进行分组的依据数组
	 * 返回值：新建对象，存放分组的结果
	 * 示例 ：
	 * 输入：groupBy(['one', 'two', 'three'], 'length')
	 * 输出：{ '3': ['one', 'two'], '5': ['three'] }
	 */
	groupBy : function(arr , fun){//代码转自 endsWith
		var result = new Object, i, j ,flag;
		if(fun instanceof Function){
			for(i = 0; i < arr.length; i++){
				if( !(result[fun(arr[i])] instanceof Array)){
					result[fun(arr[i])] = new Array;
				}
				result[fun(arr[i])].push(arr[i]);
			}
		}else if(typeof fun === "string"){
			for(i = 0; i < arr.length; i++){
				if( !(result[arr[i][fun]] instanceof Array)){
					result[arr[i][fun]] = new Array;
				}
				result[arr[i][fun]].push(arr[i]);
			}
		}
		
		
		return result;
	},

	/*
	 * 函数名称：keyBy
	 * 函数功能：根据已知函数或属性对数组内容按属性分类
	 * 参数：
	 * arr：源数组
	 * fun：对数组进行分组的依据数组
	 * 返回值：新建对象，存放分组的结果
	 * 示例 ：
	 * 输入：keyBy([{ 'dir': 'left', 'code': 97 },{ 'dir': 'right', 'code': 100 }], function(o) {return String.fromCharCode(o.code);});
	 * 输出：{ 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	 */
	keyBy : function(arr , fun){//代码转自 groupBy
		var result = new Object, i, j ,flag;
		if(fun instanceof Function){
			for(i = 0; i < arr.length; i++){
				result[fun(arr[i])] = arr[i];
			}
		}else if(typeof fun === "string"){
			for(i = 0; i < arr.length; i++){
				result[arr[i][fun]] = arr[i];
			}
		}
		return result;
	},
	/*
	 * 函数名称：parseJson
	 * 函数功能：解析json串
	 * 参数：
	 * str：需要解析的json串
	 * 返回值：解析结果
	 * 示例 ：
	 * 输入：parseJson("[[4,[30,454,25,'a'],8],true]");
	 * 输出：[[4,[30,454,25,'a'],8],true]
	 */
	parseJson : function(str) {
		var result = {},flag1 = true, flag2 = true , flag3 = true, flag4 = true, flag5 = true, temp ='', temparr = [], k = '',v = '';
		for(var i = 0; i < str.length; i++){
			if(i == 0 && str[i] == '['){
				result = matchArray(str);
				return result;
			}																   
			else if(i == 0 && str[i] != '{'){
				if(typeof str == 'string'){
					result = matchValue(str);
					return result;
				}
			}
			else if(i == 0 && str[i] == '{' && flag1 == true && flag2 == true && flag3 == true ){ 
				flag1 = false; 											
			}else if(i == str.length - 1 &&str[i] == '}' && flag1 == false && flag2 == true && flag3 == false){
				if( k.length > 0 && v.length > 0 ){						
					if(typeof v == 'string'){
						v = matchValue(v);
					}
					result[k] = v;										
					flag3 = true;										
				}
				flag1 = true; 											
				return result; 											
			}else if(str[i] == '{' && flag1 == false && flag3 == false){ 
				temp += str[i];
				flag5 = false;
			}
			else if(str[i] == '}' && flag1 == false && flag3 == false){ 
				flag5 = true;
				temp += str[i];
				v = ZhangDZ.parseJson(temp);								
			}
			else if(flag5 == false && flag1 == false && flag3 == false){ 
				temp += str[i];
			}
			else{														
				if(str[i] == '"' && flag2 && flag3 == true){ 			
					flag2 = false; 										
				}else if(str[i] =='"' && !flag2 && flag3 == true){		
					flag2 = true; 										
				}else if(!flag2 && flag3 == true){						
					k += str[i];
				}else if(flag2 && str[i] == ":" && flag3){				
					flag3 = false; 										
				}else if(flag2 && str[i] == "," && !flag3 && flag4 ){   
					flag3 = true; 										
					if(typeof v == 'string'){
						v = matchValue(v);
					}
					result[k] = v;
					k = '';
					v = ''; 
				}else if(!flag3 && flag2){								 
					if(str[i] == '"'){
						continue;
					}
					else if(str[i] == '['){								
						flag4 = false;									
					}else if(str[i] == ']'){							
						flag4 = true;
						v = temparr;
					}else if(flag4 == false){
						if(str[i + 1] == ',' || str[i + 1] == ']'){
							v += str[i];
							if(typeof v == 'string'){
								v = matchValue(v);
							}
							temparr.push(v);
							v = '';
						}else if(str[i] == ','){
							continue;
						}
						else{
							v += str[i];
						}
					}										
					else{												
						v += str[i];
					}
				}
			} // {} 内部判断 end
		}	// for end
		function matchValue(value) {
			value = value.toString();
			if (Boolean(value.match(null))) {
				value = null;
			} else if (Boolean(value.match(true))) {
				value = true;
			} else if (Boolean(value.match(false))) {
				value = false;
			} else if (Boolean(value.match(/^\d+\b/))) {
				value = Number(value);
			} 
			return value;
		}

		function matchArray(str) {
			var result = [], v = '';
			for (var i = 0; i < str.length; i++) {
				if (i == 0 && str[i] == '[') {
					continue;
				} else if (i > 0 && str[i] == '{') {
					var posend = str.indexOf('}', i);
					var posstart = str.indexOf('{', i + 1);
					if (posstart < posend && posstart >= 0){
						posend = str.indexOf('}', posend + 1);
					}
					v = ZhangDZ.parseJson(str.slice(i, posend + 1));
					i = posend;
				} else if (i > 0 && str[i] == '[') {
					var posend = str.indexOf(']', i);
					var posstart = str.indexOf('[', i + 1);
					if (posstart < posend && posstart >= 0){
						posend = str.indexOf(']', posend + 1);
					}
					v = matchArray(str.slice(i, posend + 1));
					i = posend;
				} else if (i == str.length - 1 && str[i] == ']') {
					(typeof v == 'string') ? result.push(matchValue(v)) : result.push(v);
					v = '';
					return result;
				} else if (str[i] == ','){
					(typeof v == 'string') ? result.push(matchValue(v)) : result.push(v);
					v = '';
				} else if(str[i] == "'" || str[i] == '"'){
					continue;
				} else {
					v += str[i];
				}
			}
		}
	},	// function end
	/*
	 * 函数名称：sqrt
	 * 函数功能：求数字平方根
	 * 参数：
	 * num： 需要开方的数字
	 * 返回值：平方根
	 * 示例 ：
	 * 输入：sqrt(3);
	 * 输出：1.72
	 */
	sqrt : function(num) {
	    if(num === 1){
	         return 1
	     }else if(num === 0){
	         return 0
	     }else {
	         var temp = num / 2 ,start = 0, end = num
	         while (temp) {
	             var s = temp * temp
	             if(Math.abs(s - num) <= 0.0001) {
	                 return temp
	             }else if(s > num) {
	                 end = temp
	                
	             }else {
	                 start = temp
	             } 
	             temp = (start + end) / 2 
	         }
	     } 
	 },
	 /*
	  * 函数名称：sqrttrue
	  * 函数功能：判断该数字是否某数字的平方
	  * 参数：
	  * num： 需要开方的数字
	  * 返回值：true / false
	  * 示例 ：
	  * 输入：sqrttrue(3);
	  * 输出：false
	  */
	 sqrttrue : function (num) {
	     if(num === 1){
	         return true
	     }else {
	         var temp = parseInt(num / 2 + 0.5),start = 0, end = num
	         while (temp) {
	             var s = temp * temp
	             if(s === num) {
	                 return true
	             }else if(s > num) {
	                 end = temp
	                
	             }else {
	                 start = temp
	             } 
	             if(Math.abs(end - start) == 1){
	                 return false
	             }
	             temp = parseInt((start + end) / 2 + 0.5)
	         }
	     }
	 },
	 /*
	  * 函数名称：findDisappearedNumbers
	  * 函数功能：找到数组中跳过的元素
	  * 参数：
	  * num： 丢失某些元素的数组
	  * 返回值：丢失的元素
	  * 示例 ：
	  * 输入：ar a = [4,3,2,7,8,2,3,1];findDisappearedNumbers(a);
	  * 输出：[5, 6]
	  */
	 findDisappearedNumbers : function(nums) {
	     var length = nums.length
	     var i, result = [], temp
	     for(i = 0; i < length; i++){
	         if(nums[i] === i + 1){
	             nums[i] = -1
	             continue
	         }
	         else if(nums[i] == -1){
	             continue
	         }
	         else {
	             var key = nums[i]
	             temp = nums[key - 1]
	             while(temp){
	                 if(temp == -1 ){
	                     break
	                 }
	                 nums[key -1] = -1
	                 key = temp
	                 temp = nums[key - 1]
	             }
	         }
	     }
	     for(i = 0; i < length; i++){
	         if(nums[i] > -1) {
	             result.push(i + 1)
	         }
	     }
	     return result
	 },
	 /**
	 * 函数名称：reverseNum
	  * 函数功能：翻转数字位置
	  * 参数：
	  * num： 需要翻转的数字
	  * 返回值：翻转后的数字（若数字超出32位无符号数，返回0）
	  * 示例 ：
	  * 输入：ar a = -123;reverseNum(a);
	  * 输出：-321
	  */
	 reverseNum: function(x) {
	     var result
	     var flag = false 
	     if(x < 0){
	         flag = true
	         x = - x
	     }
	     result = parseInt(x.toString().split('').reverse().join(''))
	     if(result > 2147483647){
	         return 0
	     }
	     if (flag) {
	         result = parseInt('-' + result)
	     }
	     return result 
	 },
	 /**
	 * 函数名称：myAtoi
	  * 函数功能：将字符串转化为数字（从字符串中第一个数字（或+、-）开始转）
	  * 参数：
	  * str： 字符串
	  * 返回值：数字（若数字超出32位无符号数，返回0）
	  * 示例 ：
	  * 输入：ar a = -123;reverseNum(a);
	  * 输出：-321
	  */
	 myAtoi : function(str) {
	     if(!/\d/.test(str)) {
	         return 0
	     }else { 
	         var sym, temp
	         var flag = str.match(/\d/).index
	         if(/[-+]/.test(str)){
	             sym = str.match(/[-+]/).index
	             if(sym < flag){ 
	                 temp = parseInt(str.slice(sym))
	             }
	         } else {
	             temp = parseInt(str.slice(flag))
	         }
	         if(Number.isNaN(temp)){
	             return 0
	         }
	         if(temp > 2147483647) {
	             return 2147483647 
	         }
	         if(temp < -2147483648) {
	             return -2147483648
	         }
	         return temp
	     }
	 },
	 /**
	 * 函数名称：myPow
	  * 函数功能：幂函数
	  * 参数：
	  * x： 底数
	  * n： 幂数
	  * 返回值：x的n次幂
	  * 示例 ：
	  * 输入：myPow(2,3)
	  * 输出：8
	  */
	 myPow = function(x, n) {
	     var result = 1
	     if( n === 0){
	         return 1
	     }
	     if(n < 0){
	         n = -n
	         x = 1 / x
	     }
	     return (n % 2 === 0) ? myPow(x*x, n / 2) : x * myPow(x * x, parseInt(n /2))
	 },
	 /**
	 * 函数名称：pascal
	  * 函数功能：输出帕斯卡三角形
	  * 参数：
	  * numRows： 需要输出的行数
	  * 返回值：包含帕斯卡三角形的二维数组
	  * 示例 ：
	  * 输入：pascal(5)
	  * 输出：[
			     [1],
			    [1,1],
			   [1,2,1],
			  [1,3,3,1],
			 [1,4,6,4,1]
			]
	  */
	pascal = function(numRows) {
	    var result = []
	    
	    for(var i = 0; i < numRows; i++){
	        var temp = []
	        for(var j = 0; j <= i; j++){
	            temp.push(Cre(i, j))
	        }
	        result.push(temp)
	    }
	    return result
	    
	    
	    function Cre(n, k)  
	    {  
	        if (n==k)  
	        {  
	            return 1;  
	        }  
	        if (k==0)  
	        {  
	            return 1;  
	        }  
	        if (k==1)  
	        {  
	            return n;  
	        }  
	        if (n==1)  
	        {  
	            return 1;  
	        }  
	        return result[n-1][k-1]+result[n-1][k];  
	    } 
	        
	},
	reverseVowels : function(s) {
	
	    var arr = s.split('')
	    var i = 0, j = arr.length -1, temp
	    while(i < j){
	        while(!isVowel(arr[i]) && i < arr.length){
	            i ++
	        }
	        if(i >= j) {
	            break
	        }
	        while(!isVowel(arr[j]) && j > 0){
	            j --
	        }
	        if(j <= i) {
	            break
	        }
	        if(i < j) {
	            temp = arr[i]
	            arr[i] = arr[j]
	            arr[j] = temp
	            i++
	            j--
	        }
	    }
	    return arr.join('')
	    function isVowel (a){
		    switch(a) {
		        case 'a':
		        case 'e':
		        case 'i':
		        case 'o':
		        case 'u': return true
		        default: return false
		    }
		}
	},
	// reverseVowels(',.')
	/**
		LeetCode: https://leetcode.com/problems/letter-combinations-of-a-phone-number/#/description
	*/
	letterCombinations : function(digits) {
	    var s = digits.split(''),res = ['']
	    if(s.length === 0) {
	        return []
	    }
	    for(var i = 0; i < s.length; i++){
	        if(s[i] == '0'){
	            return []
	        }else {
	            res = arrMul(res, numToStr(s[i]))
	        }
	        
	    }
	    
	    return res
	    
	    function arrMul (a1, a2) {
	        var result = []
	        for(var i = 0; i < a1.length; i++) {
	            for(var j = 0; j < a2.length; j++){
	                var str = a1[i] + a2[j]
	                result.push(str)
	            }
	        }
	        return result
	    }
	    
	    function numToStr(num) {
	        switch(num){
	            case '1': return ['*']
	            case '2': return ['a','b','c']
	            case '3': return ['d','e','f']
	            case '4': return ['g','h','i']
	            case '5': return ['j','k','l']
	            case '6': return ['m','n','o']
	            case '7': return ['p','q','r','s']
	            case '8': return ['t','u','v']
	            case '9': return ['w','x','y','z']
	        }
	    }
	},
	/**
		LeetCode: https://leetcode.com/problems/number-of-digit-one/#/description
	*/
	countDigitOne: function(n) {
	    var i = 0, count = 0
	    for(i; i <= n; i++){
	        var temp = i.toString()
	        if(temp.indexOf('1') !== -1) {
	            count += temp.match(/1/g).length
	        }
	    }
	    
	   return count
	},
	/*
	http://www.freecodecamp.cn/challenges/roman-numeral-converter
	 *//
	convert : function(num) {
		var nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5,4, 1] ;
		var roman = [ "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX","V", "IV", "I"];
		var str = '';
		var i = 0;
		while(num !== 0) {
			if(num >= nums[i]) {
			  	num -= nums[i];
				str += roman[i];
			} else {
			  	i++;
			}
		}
	 
	 return str;
	},
	where: function(collection, source) {
	  var arr = [];
	  // What's in a name?
	  var keys = []
	  for(key in source) {
	    keys.push(key)
	  }
	  var flag 
	  collection.forEach(val => {
	    flag = true
	    for(var i = 0; i < keys.length; i++) {
	      if((keys[i] in val) == false) {
	        flag = false
	        break
	      }
	      else if(keys[i] in val && val[keys[i]] !== source[keys[i]]){
	        flag = false
	        break
	      }else {
	        continue
	      } 
	    }
	    if(flag) {
	      arr.push(val)
	    }
	  })
	  
	  return arr;
	},
	// where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) 

	myReplace: function (str, before, after) {
	  var fl_before = before.charCodeAt(0)
	  var fl_after = after.charCodeAt(0)
	  if(fl_before >= 65 && fl_before <= 90 && fl_after >= 97 && fl_after <= 122) {
	    after.replace(/^([a-z])/, function(match) {
	      console.log('匹配'+ match)
	      return match.toUpperCase()
	    })
	    
	  }
	  return str.replace(before, after);
	}

	// myReplace("Let us go to the store", "Store", "mall")

	translate: function (str) {
	  var temStr = str.split('')
	  
	  if(pig(temStr[0])) {
	    temStr.push('way')
	  }
	  else {
	  	while( ! pig(temStr[0])) {
	  		temStr.push(temStr.shift())
	  	}
	    temStr.push('ay')
	  }

	  return temStr.join('')
	  function pig(char) {
	    switch(char) {
	      case 'a':
	      case 'e':
	      case 'i':
	      case 'o':
	      case 'u': return true
	      default: return false      
	    }
	  }

	},

	
	// translate("caonsonant");

	pair: function (str) {
	  var result = []
	  var temp = []
	  for(var i = 0; i < str.length; i++) {
	    result.push([str[i], pp(str[i])])
	  }
	  return result;
	  function pp (char) {
	    switch(char) {
	      case 'A': return 'T'
	      case 'T': return 'A'
	      case 'C': return 'G'
	      case 'G': return 'C'
	    }
	  }
	},

	// pair("GCG");

	unite: function (arr1, arr2, arr3) {
	  var result = []
	  for(var i = 0; i < arguments.length; i++) {
	    result = result.concat(arguments[i])
	  }
	  return new Set(result);
	},

	// unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

	convert: function (str) {
	  // &colon;&rpar;
	  var result = ''
	  for(var i = 0; i < str.length; i++) {
	    if(str[i] == '&') {
	      result += '&amp;'
	    } else if(str[i] == '<') {
	      result += '&lt;'
	    } else if(str[i] == '>') {
	      result += '&gt;'
	    } else if(str[i] == "'") {
	      result += '&apos;'
	    } else if(str[i] == '"') {
	      result += '&quot;'
	    } else {
	      result += str[i]
	    }
	  }
	  return result;
	},

	// convert("Dolce & Gabbana");

}
