function Person(){
	this.answer = function(){
		console.log("I an answering other question");
	}
	this.thinking = function(callback, time){
		console.log("thinking");
		if(callback && typeof callback === 'function'){
			setTimeout(callback, time);
		}
	}
}
var p = new Person();
p.thinking(function(){
	console.log("I thinking 5 seconds get the right answer");
}, 5000);
p.answer();