let t, r = 0, s = false;
function start() {
    setInterval(update, 1000);
    document.getElementById("dob").addEventListener("mouseover", calcAge);
    document.getElementById("ta").addEventListener("input", countChar);
}
function update() {
    if(s) r++;
    let h = Math.floor(r / 3600);
    let m = Math.floor((r % 3600) / 60);
    let s = r % 60;
    document.getElementById("time").textContent = 
        (h<10?"0":"") + h + ":" + (m<10?"0":"") + m + ":" + (s<10?"0":"") + s;
}
function toggle() {
    s = !s;
}
function reset() {
    r = 0;
    s = false;
}
function calcAge() {
    let d = new Date(document.getElementById("dob").value);
    let a = new Date().getFullYear() - d.getFullYear();
    alert("Age: " + a);
}
function countChar() {
    let c = document.getElementById("ta").value.length;
    document.getElementById("count").textContent = c;
}