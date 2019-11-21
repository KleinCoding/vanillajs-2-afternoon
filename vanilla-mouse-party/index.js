let mousePosition = {x = 0, y = 0}
let drawId;

// This function will take in a min and a max number, 
//and return a random number between those two.

const getRandomNumber =function(min,max){
    return Math.round(Math.random() * (max - min + 1)) + min;
};

window.addEventListener("mousemove", function(mouseMoveEvent)
{
mousePosition.x = mouseMoveEvent.pageX;
mousePosition.y = mouseMoveEvent.pageY;
});

//Below code functionally same as above...
//Can use onMove() inside the event listener above instead of
//in-line function thats currently written. Should be below..
//// window.addEventListener("mousemove", onMove)
//// function onMove(){
////     onmousemove(mousePosition.x = mouseMoveEvent.pageX,
////         mousePosition.y = mouseMoveEvent.pageY)
//// }

function draw(){
    return setInterval(function() { 
const container = document.getElementById(`wrap`);
const color = `background:rgb(${getRandomNumber( 0, 255)}, 
${getRandomNumber(
    0,
    255
    )}, ${getRandomNumber(0, 255)});`;
const ballSize = getRandomNumber(10, 30);
const size = `height:${ballSize}px; width:${ballSize}px;`;
const left = `left${getRandomNumber(
    mousePosition.x - ballSize,
    mousePosition.x
    )}px; `;
const top = `top:${getRandomNumber(
    mousePosition.y - ballSize,
    mousePosition.y
    )}px; `;
const style = `${left}${top}${color}${size}`;

const ball = document.createElement("div");
ball.classList.add("ball");
ball.style = style;

ball.addEventListener("animationend", function(e){
    e.target.remove();
});

container.appendChild(ball);
}, 50);
}



