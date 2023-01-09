const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const playerSpeed = 1;
let stoneSpeed;
let stoneCount;

let p1Y = 10;
let p1X = 100;
let p2Y = 10;
let p2X = 300;

function movePlayer()
{

}

draw()
{
    
}
function gameLoop() {
           
         
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