let loop;
let fps = 60;

window.onload = function () {
        console.log('Gameloop');
        loop = setInterval (() =>  {
            update();
            render();
        }, 1000/fps);
}

function update () {
    console.log('updating');

}

function render () {
    console.log('rendering');

}