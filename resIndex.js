var fs = require('fs');
var url = require('url');

exports.resIndex = function(res){
	res.writeHead(200,{'Content-type':'text/html'});
	var filename = __dirname + '/module/' + url.parse('index.html').pathname;
	var pageIndex = fs.readFileSync(filename, 'utf-8');
	res.end(pageIndex);
};