function Person(){
}
Person.prototype.eat = function(){
	console.log('eat');
};
Person.prototype.say = function(){
	console.log('say');
};

module.exports = Person;