function Mouse(name) {
    this.name = name;
    this.date = false;
}

Mouse.prototype.die = function () {
    this.date = true;
}

module.exports = Mouse;