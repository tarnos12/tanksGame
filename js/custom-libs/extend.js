/**
 * Created by Tarnos on 2017-01-15.
 */

Function.prototype.extend = function(obj){
    this.prototype = Object.create(obj.prototype);
    this.prototype.constructor = this;
};