/**
 * Created by Tarnos on 2017-06-12.
 */

function Crest(){
    this.width = 32;
    this.height = 32;
    this.x = Math.floor(GAME_AREA.width / 32 / 2) * 32;
    this.y = GAME_AREA.height - this.height;
}

Crest.prototype.update = function(){

};

Crest.prototype.render = function(){
    ctx.save();
    ctx.fillStyle = "silver";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
    ctx.fillText("C", this.x + this.width / 2, this.y + this.height / 2);
};

