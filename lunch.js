function havelunch(food, drink, callback){
	console.log("eatting " + food + " and drinking " + drink);
	if(callback && typeof callback === 'function'){
		setTimeout(callback, 5000);
	}
}

havelunch('toase', 'coffee', function(){
	console.log("eatting end");
});