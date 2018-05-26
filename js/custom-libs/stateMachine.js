/**
 * Created by Tarnos on 2017-01-15.
 */

function IsState(){}
IsState.prototype.update = function(){};
IsState.prototype.render = function(){};
IsState.prototype.onExit = function(){};
IsState.prototype.onEnter = function(){};
IsState.prototype.clearRect = function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

function StateMachine(){
    this.gameStates = {};
    this.currentState = new IsState();
}
StateMachine.extend(IsState);
StateMachine.prototype.update = function(){
    for(var i = 0; i < this.currentState.length; i++){
        this.currentState[i].update();
    }
};
StateMachine.prototype.render = function(){
    for(var i = 0; i < this.currentState.length; i++){
        this.currentState[i].render();
    }
};
StateMachine.prototype.add = function(name, state){
    this.gameStates[name] = state;
};
StateMachine.prototype.change = function(name){
    for(var i = 0; i < this.currentState.length; i++){
        this.currentState[i].onExit();
    }

    this.currentState = this.gameStates[name];

    for(var j = 0; j < this.currentState.length; j++){
        this.currentState[j].onEnter();
    }
};