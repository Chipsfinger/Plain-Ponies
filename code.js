let loop;
let fps = 60;
let canvas_, ctx;

window.onload = function () {
        console.log('Gameloop');
        prepareCanvas();
        loop = setInterval (() =>  {
            update();
            render();
        }, 1000/fps);
}

function fillCanvas() {
    ctx.fillStyle = '#1bafdb';
    ctx.fillRect(0,0, canvas_.width, canvas_.height);
}

function prepareCanvas() {
    canvas_ = document.getElementById('canvas_');
    ctx = canvas_.getContext('2d');
    document.body.style.padding = 0;
    document.body.style.margin = 0;
    canvas_.width = window.innerWidth;
    canvas_.height = window.innerHeight;
}

function update () {
    console.log('updating');
}

function render () {
    console.log('rendering');
    fillCanvas ();
}