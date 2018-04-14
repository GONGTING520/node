var dns = require('dns');

dns.resolve4('www.qq.com', function(err, address){
	if(err){
		console.log(err);
	}else{
		// 会返回离当前位置最近的两个ip地址
		console.log(address);
		//['111.161.64.40','125.39.240.113']
	}
});