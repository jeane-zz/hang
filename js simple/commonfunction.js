//最大公约数
function gys(m , n) {
	var temp = 0;
	if(m < n){
		temp = m ;
		m = n;
		n = temp;
	}
	while( n != 0 ){
		temp = m % n;
		m = n;
		n = temp;
	}
	return m;
}
//最小公倍数
function gbs(m , n) {
	return m * n /gys(m , n);
}
//素数
function prime(a) {
	var i ;
	if(a == 0 || a == 1){
		return false;
	}
	for ( i = 2; i < Math.sqrt(a); i++) {
		if(a % i ==0){
			return false;
		}
	}
	if(i > Math.sqrt(a)){
		return true;
	}
}
// 阶乘
function factorial(n) {
	var product = 1;
	if(n == 0 ){
		product = 1;
	}
	else{
		for (var i = 1; i <= n; i++) {
			product *= i;
		}
	}	
	//console.log("阶乘",n,product);
	return product;
}
//排列 注意 m<=n
function arrange(n , m) {
	//factorial(n);
	//factorial(n-m);
	var arrangement = factorial(n)/factorial(n-m);
	//console.log("排列",n,m,arrangement);
	return arrangement;
}
//组合
function combine(n , m) {
	//factorial(m);
	//arrange(n , m);
	var combination = arrange( n, m)/factorial(m);
	//console.log("组合",n,m,combination);
	return combination;
}
//完全数
function perfectNumber(a){
	var i = 1 ,sum = 0 ;
	for(i = 1; i < a ; i ++ ){
		if( a % i == 0 ){
			sum += i
		}
	}
	if( sum == a ){
		console.log("%s is a perfect number" , a);
	}
}
//求两点的距离
function length(x1 , y1, x2, y2) {
	var temp;
	if(x1 < x2){
		temp = x1;
		x1 = x2;
		x2 = temp;
	}
	if(y1 < y2){
		temp = y1;
		y1 = y2;
		y2 = temp;
	}
	var length = Math.sqrt( (x1 -x2) * (x1 -x2) + (y1 -y2) * (y1 -y2) );
	console.log("the distance between (%s,%s) and (%s ,%s) is %s" , x1,y1,x2,y2,length);
}
//m的n次幂
function power(m , n) {
	var powerNum = 1;
	//任何非零数的0次方都等于1
	if( m != 0 && n == 0){
		powerNum = 1;
	}
	//0的任何正数次方都等于0
	else if( m ==0 && n > 0){
		powerNum = 0;
	}
	else if( m != 0 && n > 0){
		for (var i = 0; i < n; i++) {
			powerNum *= m;
		}
	}
	else if( m != 0 && n < 0){
		for (var i = 0; i < -n; i++) {
			powerNum *= m;
		}
		powerNum = 1 / powerNum;
	}
	return powerNum;
}

//求平方根，模拟sqrt
function sqareroot(start , end,num){
	if( ((start+end)*(start+end)/4 -0.0000001 <= num) && ((start+end)*(start+end)/4 + 0.0000001 >= num)){
		return (start + end)/2;
	}
	else if((start+end)*(start+end)/4 > num){
		return sqareroot(start ,(start + end )/2,num);
	}
	else{
		return sqareroot((start + end )/2 ,end,num);
	}
}
//console.log(sqareroot(9 , 46 , 90).toFixed(7));
//将数字转换为字符串。或者反转
function reverse(a) {
	//var a = 12345643 ;
	//console.log(a);
	var b = "";
	while ( a > 0){
		b += "" + (a % 10);
		a = parseInt(a/10);
	}

	console.log(b);
	var c = [0] , num = 0, d = "";
	for (var i = b.length-1; i >= 0; i--) {
		c[num++] = b[i];
		d += "" + b[i];
	}
	console.log(c);
	console.log(d, typeof d);
}
//reverse(1234987);
//三个数比较大小
function compare( a , b , c){
	if( a > b && b > c ){
		console.log( a , b , c);
	}
	if( a > b && c > b ){
		console.log( a , c , b);
	}
	if( b > a && a > c ){
		console.log( b , a , c);
	}
	if( b > c && c > a ){
		console.log( b , c , a);
	}
	if( c > b && b > a ){
		console.log( c , b , a);
	}
	if( c > a && a > b ){
		console.log( c , a , b);
	}
}
//