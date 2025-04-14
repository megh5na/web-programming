let c = document.getElementById("c");
let ctx = c.getContext("2d");
c.width = 400;
c.height = 400;

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    ctx.arc(200, 200, 180, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.stroke();

    for (let i = 1; i <= 12; i++) {
        let a = (i * 30 - 90) * Math.PI / 180;
        ctx.fillStyle = "#000";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(i, 200 + Math.cos(a) * 160, 200 + Math.sin(a) * 160);
    }

    let t = new Date();
    let h = (t.getHours() % 12 + t.getMinutes() / 60) * 30;
    let m = t.getMinutes() * 6 + t.getSeconds() / 10;
    let s = t.getSeconds() * 6;

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + Math.cos((h - 90) * Math.PI / 180) * 100, 200 + Math.sin((h - 90) * Math.PI / 180) * 100);
    ctx.stroke();

    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + Math.cos((m - 90) * Math.PI / 180) * 140, 200 + Math.sin((m - 90) * Math.PI / 180) * 140);
    ctx.stroke();

    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(200 + Math.cos((s - 90) * Math.PI / 180) * 160, 200 + Math.sin((s - 90) * Math.PI / 180) * 160);
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(200, 200, 10, 0, Math.PI * 2);
    ctx.fill();

    requestAnimationFrame(draw);
}

draw();