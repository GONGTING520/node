var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	//index.html 路径
	res.writeHead(200, {'Content-type':'text/html'});
	// console.log(__dirname); -->D:\WebStrom\MyCode\node
	var readPath = __dirname + '/module/' + url.parse('index.html').pathname;
	// 必须使用同步函数，因为下面要用到
	var indexPage = fs.readFileSync(readPath, 'utf-8');
	res.end(indexPage);

	console.log(req.url);//获取url路径
	console.log(req.headers);//获取请求头
	console.log(req.method);//获取请求方法
}).listen(3000);

console.log('server start port 3000');