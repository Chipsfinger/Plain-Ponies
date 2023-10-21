let loop;
let fps = 60;
let canvas_, ctx;
let ball = {
    xpos : 0,
    ypos : 0,
    xvel : 5,
    yvel : 5,
    size : 30,
    color : 'white',
    init : function(canvas_) {
        this.xpos = ( canvas_.width - this.size) / 2;
        this.ypos = ( canvas_.height - this.size) / 2;
    },
    update : function(){
        this.xpos += this.xvel;
        this.ypos += this.yvel;

    },
    draw : function(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xpos,this.ypos,this.size, 0,Math.PI*2, true);
        ctx.fill();
    },
}

window.onload = function () {
        console.log('Gameloop');
        prepareCanvas();
        ball.init(canvas_);
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
    ball.update();
}

function render () {
    console.log('rendering');
    fillCanvas ();
    ball.draw(ctx);
}