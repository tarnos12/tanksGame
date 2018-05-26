/**
 * Created by Tarnos on 2017-06-18.
 */

var Eraser = function(x, y, width, height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isEraser = true;
};

Eraser.prototype.update = function(){

};

Eraser.prototype.render = function(){
    ctx.save();
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.width, this.y + this.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(this.x + this.width, this.y);
    ctx.lineTo(this.x, this.y + this.height);
    ctx.stroke();
    ctx.restore();
};
