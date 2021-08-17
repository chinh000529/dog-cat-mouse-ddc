var Dog = require('./Dog');
var Cat = require('./Cat');

var dog = new Dog('Hung');
dog.sayHi();

var cat = new Cat();
dog.eat(cat);
console.log(dog);

