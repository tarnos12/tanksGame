/**
 * Created by Tarnos on 2017-01-15.
 */

var keys = {},
    keyNames = {
    "37": "LEFT",
    "38": "UP",
    "39": "RIGHT",
    "40": "DOWN",
    "90": "Z",
    "88": "X"
    };
var mouseX = null;
var mouseY = null;
var mouseDown = false;
var mouseUp = false;
var mouseClickPos = [null, null];
var ROTATE = {
    "UP": 0,
    "RIGHT": 90,
    "DOWN": 180,
    "LEFT": 270
};
document.addEventListener('keydown', function(e){
    keys[keyNames[e.keyCode]] = true;
});
document.addEventListener('keyup', function(e){
    keys[keyNames[e.keyCode]] = false;
});

canvas.addEventListener("mousemove", function(event) {
    mouseX = event.clientX - canvas.offsetLeft + window.pageXOffset;
    mouseY = event.clientY - canvas.offsetTop + window.pageYOffset;
});
canvas.addEventListener("mousedown", function(event){
    mouseClickPos[0] = event.clientX - canvas.offsetLeft + window.pageXOffset;
    mouseClickPos[1] = event.clientY - canvas.offsetTop + window.pageYOffset;
    mouseDown = true;
    mouseUp = false;
});

canvas.addEventListener("mouseup", function(event){
   mouseDown = false;
   mouseUp = true;
   mouseClickPos = [null, null];
});