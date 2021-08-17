var Mouse = require('./Mouse');
function Cat(name) {
    this.name= name;
    this.stomach= [];
}

Cat.prototype.eat= function(mouse) {
    if(mouse instanceof Mouse) {
        this.stomach.push(mouse);
    } else {
        throw new Error("Cat can only eat Mouse")
    }
}

module.exports = Cat;