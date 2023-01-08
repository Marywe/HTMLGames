// Get the canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let player;
let aliens;
let bullets;
let canShoot = true;

// Game state
let score;
let gameOver;

let input = {
  left: false,
  right: false,
};

function init() {
    // Create the player
    player = {
      x: canvas.width / 2,
      y: canvas.height - 50,
      width: 30,
      height: 20,
      speed: 2,
    };
     // Create the aliens
  aliens = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
      aliens.push({
        x: i * 50 + 50,
        y: j * 50 + 50,
        width: 40,
        height: 40,
        speed: 0.7,
      });
    }
  }

  // Create the bullets
  bullets = [];
  // Initialize the score
  score = 0;
  // Set gameOver to false
  gameOver = false;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }


function update() {
    // Update player position
    if (input.left) {player.x -= player.speed;}
    if (input.right) {player.x += player.speed;}
  
    // Constrain player position to the screen
    player.x = clamp(player.x, 0, canvas.width - player.width);
  
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].y -= bullets[i].speed;
      
        // Remove the bullet if it goes off the screen
        if (bullets[i].y < 0) {
          bullets.splice(i, 1);
        }
      }
  
    // Update alien positions
    for (let i = 0; i < aliens.length; i++) {
      aliens[i].x += aliens[i].speed;
  
      // Reverse alien direction if they reach the edge of the screen
      if (aliens[i].x > canvas.width - aliens[i].width || aliens[i].x < 0) {
        aliens[i].speed *= -1;
        aliens[i].y += 30;
      }
    }
  
 // Check for bullet-alien collisions
 for (let i = 0; i < bullets.length; i++) {
    for (let j = 0; j < aliens.length; j++) {
      if (collides(bullets[i], aliens[j])) {
        // Remove the alien and bullet
        bullets.splice(i, 1);
        aliens.splice(j, 1);
        
        // Update the score
        score += 100;
      }
    }
  }

  // Check for player-alien collisions
  for (let i = 0; i < aliens.length; i++) {
    if (collides(player, aliens[i])) {
      gameOver = true;
    }
  }
}

function collides(a, b) {
  if(!a) return false;
      return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

function BulletTimer()
{
  if (!canShoot)
  {

    canShoot = true;
  }
}

// Draw the game objects
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  ctx.fillStyle = "white";
  ctx.fillRect(player.x, player.y, player.width, player.height);

  for (let i = 0; i < aliens.length; i++) {
    ctx.fillStyle = "green";
    ctx.fillRect(aliens[i].x, aliens[i].y, aliens[i].width, aliens[i].height);
  }

  // Draw the bullets
for (let i = 0; i < bullets.length; i++) {
  ctx.fillStyle = "red";
    ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].width, bullets[i].height);
  }
  
  // Draw the score
  ctx.fillStyle = "white";
  ctx.font = "24px sans-serif";
  ctx.fillText(`Score: ${score}`, 10, 25);
  
  // Draw game over message
  if (gameOver) {
    ctx.font = "48px sans-serif";
    ctx.fillText("Game Over!", canvas.width / 2 - 150, canvas.height / 2);
  }
}
  
  // Handle key down events
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft" || event.code === 'KeyA') {
      input.left = true;
    }
    if (event.code === "ArrowRight" || event.code === 'KeyD') {
      input.right = true;
    }
  });
  
  // Handle key up events
  document.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft" || event.code === 'KeyA') {
      input.left = false;
    }
    if (event.code === "ArrowRight" || event.code === 'KeyD') {
      input.right = false;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && canShoot) {
      // Create a new bullet
      bullets.push({
        x: player.x + player.width / 2,
        y: player.y,
        width: 10,
        height: 10,
        speed: 5,
      });

      canShoot = false;

      setTimeout(BulletTimer, 1000);

    }
  });



// Main game loop
function gameLoop() {

  if(!gameOver){
  // Update the game state
  update();
  }

  // Draw the game objects
  draw();
  // Call the gameLoop function again on the next frame
  requestAnimationFrame(gameLoop);
}

init();
// Start the game loop
gameLoop();


