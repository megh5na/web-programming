let c = document.getElementById("c");
let ctx = c.getContext("2d");
c.width = 800;
c.height = 600;
let t = 0;

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#87CEEB";
    ctx.beginPath();
    ctx.ellipse(400, 400, 300, 150, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FF4500";
    ctx.beginPath();
    ctx.moveTo(350 + Math.sin(t * 0.05) * 20, 350);
    ctx.quadraticCurveTo(360, 330, 380, 350);
    ctx.quadraticCurveTo(390, 370, 370, 370);
    ctx.quadraticCurveTo(360, 360, 350, 370);
    ctx.quadraticCurveTo(340, 370, 330, 350);
    ctx.fill();

    ctx.fillStyle = "#FFD700";
    ctx.beginPath();
    ctx.arc(600, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#FFD700";
    ctx.lineWidth = 2;
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(600, 100);
        ctx.lineTo(600 + Math.cos(i * Math.PI / 6) * 70, 100 + Math.sin(i * Math.PI / 6) * 70);
        ctx.stroke();
    }

    ctx.fillStyle = "#228B22";
    ctx.beginPath();
    ctx.arc(400, 300, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(400, 280, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#8B4513";
    ctx.fillRect(100, 350, 100, 100);
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.moveTo(100, 350);
    ctx.lineTo(150, 300);
    ctx.lineTo(200, 350);
    ctx.fill();

    ctx.strokeStyle = "#006400";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(250, 400);
    ctx.lineTo(250, 300);
    ctx.stroke();
    ctx.fillStyle = "#FF69B4";
    ctx.beginPath();
    ctx.ellipse(250, 300, 20, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(250, 300, 10, 20, Math.PI / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#808080";
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(300 + i * 20, 450, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    t++;
    requestAnimationFrame(draw);
}

draw();