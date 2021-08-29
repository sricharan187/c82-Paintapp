canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_pos_x,last_pos_y;
color="black";
width_line=3;

canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("mousemove",my_mousemove);

function my_mouseup(e) {
    mouseEvent="mouseUp";
}
function my_mousedown(e) {
    mouseEvent="mouseDown";
}
function my_mouseleave(e) {
    mouseEvent="mouseLeave";
}
function my_mousemove(e) {
    current_pos_x=e.clientX-canvas.offsetLeft;
    current_pos_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();

        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;
        ctx.moveTo(last_pos_x,last_pos_y);
        ctx.lineTo(current_pos_x,current_pos_y);

        ctx.stroke();
        console.log("last postion of x"+last_pos_x);
        console.log("last postion of y"+last_pos_y);
        console.log("current postion of x"+current_pos_x);
        console.log("current postion of y"+current_pos_y);
    }
    last_pos_x=current_pos_x;
    last_pos_y=current_pos_y;
}
