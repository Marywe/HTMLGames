var paused = false;

window.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !paused) 
    {
      paused = true;
    }
    else if (event.code === 'Space' && paused) 
    {
      paused = false;
    }
});

function drawPauseMenu()
{
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "48px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Paused", canvas.width / 2, canvas.height / 2);
}
