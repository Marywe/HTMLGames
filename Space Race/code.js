const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var P1img = document.getElementById("P1img");
var P2img = document.getElementById("P2img");

let stoneSpeed;
let stoneCount;

let p1Y = 550;
let p1X = 130-25;
let p2Y = 550;
let p2X = 270-25;
let pWidth = 10;
let pHeight = 10;
let playerSpeed = 1;

let keyDown = {
  w:false,
  s:false,
  up: false,
  down: false
};

function movePlayer()
{
  //P1
  if(keyDown.w)
  {
    if(p1Y > 0 + 50) p1Y -= playerSpeed;
    else win();
  }
  if(keyDown.s)
  {
    if(p1Y < 550) p1Y += playerSpeed;
  }

  //P2
  if(keyDown.up)
  {
    if(p2Y > 0 + 50) p2Y -= playerSpeed;
    else win();
  }
  if(keyDown.down)
  {
    if(p2Y < 550) p2Y += playerSpeed;

  }
}

function asteroidsMoving(){

}

function win()
{

}

function draw()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(P1img,p1X,p1Y, 50, 50);
    ctx.drawImage(P2img,p2X,p2Y, 50, 50);

    ctx.beginPath();
  ctx.arc(50, 50, 4, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();

  ctx.fillStyle = "black";
  ctx.rect(canvas.width/2, 50, 2, 500);
  ctx.fill();


}
function gameLoop() {
    movePlayer();   
    draw(); 
    requestAnimationFrame(gameLoop);
}
 
window.addEventListener('keydown', function(event) {
    if (event.key === 'w') keyDown.w = true;
    else if (event.key === 's') keyDown.s = true;
    if (event.key === "ArrowDown") keyDown.down = true;
    else if (event.key === "ArrowUp") keyDown.up = true;
  });
  
  window.addEventListener('keyup', function(event) {
    if (event.key === 'w') keyDown.w = false;
    else if (event.key === 's') keyDown.s = false;
    if (event.key === "ArrowDown") keyDown.down = false;
    else if (event.key === "ArrowUp") keyDown.up = false;
  });

gameLoop();