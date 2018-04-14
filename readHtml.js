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
}).listen(3000);

console.log('server start port 3000');