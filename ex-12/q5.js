function s(id) {
    let v = parseInt(document.getElementById("i").value) || 0;
    document.getElementById(id).style.zIndex = v;
    document.getElementById("z" + id).textContent = v;
}