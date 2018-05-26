/**
 * Created by Tarnos on 2017-05-30.
 */

function Button(obj){
    this.x = obj.x;
    this.y = obj.y;
    this.width = obj.width;
    this.height = obj.height;
    this.name = obj.name;
    this.stateChange = obj.stateChange;
    this.fnCall = obj.fnCall;
    this.fnArgs = obj.fnArgs;
    this.clicked = false;
}

Button.prototype.update = function(){
    if (checkMouseCollision(this) && mouseDown) {
        this.clicked = true;
        if(this.stateChange) {
            gameMode.change(this.stateChange);
        }
        if(this.fnCall){
            this.fnCall(this.fnArgs);
        }
    }
};

Button.prototype.render = function(){
    ctx.strokeRect(this.x, this.y,
        this.width, this.height);
    ctx.strokeText(this.name, this.x + this.width / 2, this.y + this.height / 2);
};