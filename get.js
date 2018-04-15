// node get操作
var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res){
	// 获取?后的字符串
	var paramstr = url.parse(req.url).query;
	// console.log(paramstr);
	// 将字符串'id=1&name=zhangsan'转化为对象
	var paramobj = querystring.parse(paramstr);
	console.log(paramobj);
}).listen(3000);

console.log('server start port 3000');