let P1 = document.getElementById('P1');
let P2 = document.getElementById('P2');


function movePlayer()
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