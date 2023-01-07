const game = document.getElementById('game');
const paddles = document.querySelectorAll('.paddle');
const ball = document.getElementById('ball');
let winner = document.getElementById('win');

let ballX = 50;
let ballY = 50;
let speedX = 1;
let speedY = 1;
let moving = true;
let punctuation1 = document.getElementById('punctuation1');
let punctuation2 = document.getElementById('punctuation2');;


function moveBall() {
  ballX += speedX;
  ballY += speedY;

  ball.style.top = ballY + 'px';
  ball.style.left = ballX + 'px';
}

function checkCollision() {
  if (ballY < 0 || ballY > game.offsetHeight -12) {
    speedY = -speedY;
  }

   // Check for collisions with the paddles
   if (ballX < paddles[0].offsetLeft + paddles[0].offsetWidth && ballY > paddles[0].offsetTop && ballY < paddles[0].offsetTop + paddles[0].offsetHeight) {
    speedX = -speedX;
  }
  if (ballX + ball.offsetWidth > paddles[1].offsetLeft && ballY > paddles[1].offsetTop && ballY < paddles[1].offsetTop + paddles[1].offsetHeight) {
    speedX = -speedX;
  }
  
  
  if (ballX < 0) 
  {
    ++punctuation2.innerHTML;

   RestartBall()
   if(punctuation1.innerHTML!=7)
    setTimeout(function(){ moving = true }, 2000);

    else{
      winner.innerHTML = '<font size="40">P2 WINS</font>';
      RestartGame();
    }

  }
  else if (ballX > game.offsetWidth - 12)
  {
    ++punctuation1.innerHTML;

    RestartBall();
    if(punctuation1.innerHTML!=7)
      setTimeout(function(){ moving = true }, 2000);

      else{
        
        winner.innerHTML = '<font size="40">P1 WINS</font>';
        RestartGame();
      }
  }

}

function RestartBall()
{
  ballX = game.offsetWidth / 2 - 6;
  ballY = game.offsetHeight / 2;
  moving = false;
}

function RestartGame()
{
  RestartBall();
  setTimeout(Restart, 6000);

}

const keyDown = {
    w: false,
    s: false,
    k: false,
    m: false
  };
  
  // Add event listeners to track keydown and keyup events
  window.addEventListener('keydown', function(event) {
    if (event.key === 'w') keyDown.w = true;
    if (event.key === 's') keyDown.s = true;
    if (event.key === 'k') keyDown.k = true;
    if (event.key === 'm') keyDown.m = true;
  });
  
  window.addEventListener('keyup', function(event) {
    if (event.key === 'w') keyDown.w = false;
    if (event.key === 's') keyDown.s = false;
    if (event.key === 'k') keyDown.k = false;
    if (event.key === 'm') keyDown.m = false;
  });

  // Set the initial positions of the paddles
paddles[0].style.top = (game.offsetHeight/2 - 10)+ 'px' ;
paddles[1].style.top = (game.offsetHeight/2 - 10)+ 'px' ;

function movePaddles() {
    // Get the current positions of the paddles
    var paddleLeftY = parseInt(paddles[0].style.top);
    var paddleRightY = parseInt(paddles[1].style.top);
  
    if (keyDown.w) {
        // Move the left paddle up
        paddleLeftY = Math.max(0, paddleLeftY - 5);
        paddles[0].style.top = paddleLeftY + 'px';
      }
      if (keyDown.s) {
        // Move the left paddle down
        paddleLeftY = Math.min(game.offsetHeight - paddles[0].offsetHeight, paddleLeftY + 5);
        paddles[0].style.top = paddleLeftY + 'px';
      }
      if (keyDown.k) {
        // Move the right paddle up
        paddleRightY = Math.max(0, paddleRightY - 5);
        paddles[1].style.top = paddleRightY + 'px';
      }
      if (keyDown.m) {
        // Move the right paddle down
        paddleRightY = Math.min(game.offsetHeight - paddles[1].offsetHeight, paddleRightY + 5);
        paddles[1].style.top = paddleRightY + 'px';
      }
  }

function Restart()
{
  punctuation1.innerHTML=0;
  punctuation2.innerHTML=0;
  moving = true;

}

function gameLoop() {
  if(moving)
    {    
        winner.innerHTML = "";
        checkCollision();
        moveBall();    
    }

    movePaddles();
    requestAnimationFrame(gameLoop);
  }
  
gameLoop();