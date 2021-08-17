var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog("Hung");
var cat = new Cat("Dung");
var mouse = new Mouse("Thang");
try {
    cat.eat(dog);
} catch (Error) {
    console.log("Error when Cat eating a Dog");
}

console.log(cat);

