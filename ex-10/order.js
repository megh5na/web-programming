function load() {
    if(!sessionStorage.getItem("name")) sessionStorage.setItem("name", "");
}
function submit() {
    let n = document.getElementById("n").value;
    let i = document.getElementById("i").value;
    let p = document.getElementById("p").value;
    sessionStorage.setItem("name", n);
    sessionStorage.setItem("item", i);
    sessionStorage.setItem("price", p);
    window.location.href = "receipt.html";
}