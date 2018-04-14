// 读取file.txt，停两秒在输出
var fs = require('fs');
fs.readFile('./file.txt', 'utf-8', function(err, data){
	if(err){
		console.log(err);
	}else{
		setTimeout(function(){
			console.log(data);
		}, 2000);
	}
});

console.log("end");