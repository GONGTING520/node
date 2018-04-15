// node post操作
var fs = require('fs');
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var dns = require('dns');
var index = require('./resIndex.js');

http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;

	switch(pathname){
		case '/':
			index.resIndex(res);
			break;
		case '/parse':
			resParse(req, res);
			break;
		case '/favicon.ico':
			return;
			break;
		default:
			resError();
			break;
	}
}).listen(3000);


function resParse(req, res){
	var postData = "";
	req.setEncoding('utf8');
	// form表单按下submit
	req.addListener('data', function(postDataChunk){
		postData += postDataChunk;
	});
	// 数据接收完毕
	req.addListener('end', function(){
		// console.log(postData);
		var param = querystring.parse(postData);
		// console.log(param.search_dns);
		dns.resolve4(param.search_dns, function(err, addresses){
			if(err){
				console.log(err);
			}else{
				res.writeHead(200,{'Content-type':'text/plain'})
				// res.end(addresses[0]);
				res.end(querystring.stringify(addresses));
			}
		});
	});
}

function resError(){
	res.writeHead(404,{'Content-type':'text/plain'});
	res.end("Can't find the page!");
}

console.log("server start port 3000");
