/**
 * Created by Tarnos on 2017-06-12.
 */

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 640;

ctx.font = '20pt Calibri';
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.lineWidth = 2;
// stroke color
ctx.strokeStyle = 'black';

//list of blocks we can use to draw;
var BLOCKS = [
    null,//first block is null/empty.
    {color: "#a75610", defense: 0, health: 2},
    {color: "#c0c0c0", defense: 1, health: 3},
    {color: "red", defense: 2, health: 2},
    {color: "green", defense: 2, health: 2},
    {color: "purple", defense: 2, health: 2},
    {color: "orange", defense: 2, health: 2},
    {color: "violet", defense: 2, health: 2},
    {color: "aqua", defense: 2, health: 2}
];
var GAME = {};
GAME.isGameOver = false;