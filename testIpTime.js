var urls = ['www.qq.com', 'www.baidu.com', 'www.sohu.com'];
var http = require('http');

function fetchurl(url){
	var currentDate = new Date();
	http.get({"host":url}, function(res){
		console.log("Get res from " + url + ":");
		console.log("Request took: " + (new Date() - currentDate) + " ms");
	});
}

for(var i=0; i< urls.length; i++){
	fetchurl(urls[i]);
}