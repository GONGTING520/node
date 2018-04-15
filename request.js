var request = require('request');

request('https://www.baidu.com', function(error, req, response){
    response.writeHead(200, {'Content-type':'text/html'});
    response.end('<h1>123</h1>');
});