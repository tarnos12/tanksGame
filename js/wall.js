/**
 * Created by Tarnos on 2017-06-02.
 */

var Wall = function (x, y, width, height, obj) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.defense = obj.defense;
    this.health = obj.health || 1;
    this.maxHealth = obj.health;
    this.color = obj.color || "black";
    this.alpha = 1;
};

Wall.prototype.update = function () {
    this.alpha = this.health / this.maxHealth;
};

Wall.prototype.render = function(){
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.strokeRect(this.x, this.y, this.width / 2, this.height);
    ctx.strokeRect(this.x, this.y, this.width, this.height / 2);
    ctx.restore();
};