/**
 * Created by Tarnos on 2017-05-30.
 */

function Bullet(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.direction = obj.direction;
    this.radius = 2;
    this.speed = 5;
    this.damage = obj.damage;
    this.isAlive = true;
}

Bullet.prototype.update = function () {
    switch (this.direction) {
        case "UP":
            this.y -= this.speed;
            break;
        case "DOWN":
            this.y += this.speed;
            break;
        case "LEFT":
            this.x -= this.speed;
            break;
        case "RIGHT":
            this.x += this.speed;
            break;
    }
    this.collisionDetect();
};

Bullet.prototype.render = function () {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.restore();
};

Bullet.prototype.collisionDetect = function () {
    if(worldBoundCollision(this)){
        this.isAlive = false;
    }
    if(checkMapCollision(this, true)){
        this.isAlive = false;
    }
    if(checkCollision(this, crest)){
        this.isAlive = false;
        gameMode.change("gameOver");
    }
};