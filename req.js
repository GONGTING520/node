var fs = require('fs');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	/*console.log(req.url);//获取url路径
	console.log(req.headers);//获取请求头
	console.log(req.method);//获取请求方法*/

	var pathname = url.parse(req.url).pathname;
	switch(pathname){
		case '/':
			resIndex(res);
			break;
		case '/img':
			resImage(res);
			break;
		case '/favicon.ico':
			return;
			break;
		default:
			resError(res);
			break;
	}

}).listen(3000);

function resIndex(res){
	//index.html 路径
	res.writeHead(200, {'Content-type':'text/html'});
	// console.log(__dirname); -->D:\WebStrom\MyCode\node
	var readPath = __dirname + '/module/' + url.parse('index.html').pathname;
	// 必须使用同步函数，因为下面要用到
	var indexPage = fs.readFileSync(readPath, 'utf-8');
	res.end(indexPage);
}

function resImage(res){
	//index.html 路径
	res.writeHead(200, {'Content-type':'image/jpeg'});
	// console.log(__dirname); -->D:\WebStrom\MyCode\node
	var readPath = __dirname + '/img/' + url.parse('1.jpg').pathname;
	var indexPage = fs.readFileSync(readPath);
	res.end(indexPage);
}

function resError(res){
	//index.html 路径
	res.writeHead(404, {'Content-type':'text/plain'});
	res.end("Can't find the page!");
}

console.log('server start port 3000');