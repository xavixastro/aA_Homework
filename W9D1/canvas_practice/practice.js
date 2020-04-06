document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "red";
    ctx.fillRect(20, 20, 400, 300);

    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = 'orange';
    ctx.fill();

});

