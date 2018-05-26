/**
 * Created by Tarnos on 2017-05-30.
 */

function Player(obj){
    this.x = obj.x;
    this.y = obj.y;
    this.previousX = this.x;
    this.previousY = this.y;
    this.width = 32;
    this.height = 32;
    this.moveAmount = 16;//when key pressed, add/remove this amount from current position
    this.speed = 4;
    this.isMoving = false;
    this.currentDelay = 0;
    this.moveX = null;//where we want to move
    this.moveY = null;
    this.bullets = [];
    this.direction = "UP";
    this.damage = 1;
}

Player.prototype.update = function(){
    //collision detection
    if(checkMapCollision(this) || worldBoundCollision(this)){
        this.x = this.previousX;
        this.y = this.previousY;
        this.isMoving = false;
        this.moveX = null;
        this.moveY = null;
    }
    this.previousX = this.x;
    this.previousY = this.y;
    if(this.currentDelay <= 0) {
        if (keys.Z) {
            this.currentDelay = 10;
            this.bullets.push(new Bullet({
                x: this.x + this.width / 2,
                y: this.y + this.height / 2,
                direction: this.direction,
                damage: this.damage
            }));
        }
    }else{
        this.currentDelay--;
    }
    for(var i = this.bullets.length - 1; i >= 0; i--){
        if(!this.bullets[i].isAlive){
            this.bullets.splice(i, 1);
            console.log("removed : " + this.bullets.length);
            continue;
        }
        this.bullets[i].update();
    }
    if(!this.isMoving) {
        if (keys.LEFT) {
            //before moving check for collision, can do after but have to move back if collide
            this.moveX = this.x - this.moveAmount;
            this.direction = "LEFT";
            this.isMoving = true;
        } else if (keys.RIGHT) {
            this.moveX = this.x + this.moveAmount;
            this.direction = "RIGHT";
            this.isMoving = true;
        }
        else if (keys.UP) {
            this.moveY = this.y  - this.moveAmount;
            this.direction = "UP";
            this.isMoving = true;
        } else if (keys.DOWN) {
            this.moveY = this.y + this.moveAmount;
            this.direction = "DOWN";
            this.isMoving = true;
        }
    }
    if(this.moveX != null){
        if(this.x > this.moveX){
            this.x -= this.speed;
        }
        else if(this.x < this.moveX){
            this.x += this.speed;
        }else if(this.x === this.moveX){
            this.moveX = null;
        }
    }

    if(this.moveY != null){
        if(this.y > this.moveY){
            this.y -= this.speed;
        }
        else if(this.y < this.moveY){
            this.y += this.speed;
        }else if(this.y === this.moveY){
            this.moveY = null;
        }
    }
    //check if we reached destination
    if(this.moveX == null && this.moveY == null){
        this.isMoving = false;
    }
};

Player.prototype.render = function(){
    for(var i = 0; i < this.bullets.length; i++){
        this.bullets[i].render();
    }
    ctx.save();
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(ROTATE[this.direction] * Math.PI/180);
    ctx.strokeRect( -this.width / 2 + 12, -this.height / 2 - 15, 8, 15);
    // ctx.strokeRect(this.x + this.width / 2 - 3,
    //                this.y - 15, 6, 15);
    ctx.restore();
    ctx.save();
    ctx.fillStyle = "black";
    ctx.lineWidth = 1;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
};