/**
 * Created by Tarnos on 2017-06-07.
 */

function get_x(id){
    return id%(GAME_AREA.width / 32);
}

function get_y(id){
    return Math.floor(id / (GAME_AREA.width / 32));
}

function get_id(x, y){
    return y * (GAME_AREA.width / 32) + x;
}