const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var P1img = document.getElementById("P1img");
var P2img = document.getElementById("P2img");

const playerSpeed = 1;
let stoneSpeed;
let stoneCount;

let p1Y = 550;
let p1X = 100-25;
let p2Y = 550;
let p2X = 300-25;
let pWidth = 10;
let pHeight = 10;

function movePlayer()
{
  //P1
  if(keyDown.w)
  {

  }
  if(keyDown.s)
  {
    
  }
}


function draw()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(P1img,p1X,p1Y, 50, 50);
    ctx.drawImage(P2img,p2X,p2Y, 50, 50);

}
function gameLoop() {
           
    draw(); 
    requestAnimationFrame(gameLoop);
}
 
window.addEventListener('keydown', function(event) {
    if (event.key === 'w') keyDown.w = true;
    if (event.key === 's') keyDown.s = true;
    if (event.key === "ArrowUp") keyDown.down = true;
    if (event.key === "ArrowDown") keyDown.up = true;
  });
  
  window.addEventListener('keyup', function(event) {
    if (event.key === 'w') keyDown.w = false;
    if (event.key === 's') keyDown.s = false;
    if (event.key === "ArrowUp") keyDown.down = false;
    if (event.key === "ArrowDown") keyDown.up = false;
  });

gameLoop();