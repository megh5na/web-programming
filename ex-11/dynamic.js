function init() {
    let t = document.createElement("table");
    t.id = "tbl";
    for(let i = 0; i < 3; i++) {
        let r = t.insertRow();
        for(let j = 0; j < 3; j++) {
            r.insertCell().innerHTML = i + "," + j;
        }
    }
    document.getElementById("cont").appendChild(t);
    
    let b = document.createElement("button");
    b.className = "btn";
    b.textContent = "Click";
    b.onmouseover = function() { b.style.backgroundColor = "green"; };
    b.onmouseout = function() { b.style.backgroundColor = "red"; };
    document.getElementById("cont").appendChild(b);
    
    let t1 = document.createElement("input");
    t1.type = "text";
    t1.className = "txt";
    t1.onfocus = function() { t1.style.backgroundColor = "yellow"; };
    t1.onchange = function() { alert("Hello " + t1.value); };
    document.getElementById("cont").appendChild(t1);
        let i1 = document.getElementById("in1");
    let b1 = document.createElement("button");
    b1.textContent = "Add";
    b1.ondblclick = function() {
        let l = document.createElement("li");
        l.textContent = i1.value;
        document.getElementById("list").appendChild(l);
        i1.value = "";
    };
    document.getElementById("cont").appendChild(b1);
    
    let i2 = document.getElementById("in2");
    let c = 0;
    i2.onkeyup = function() { c++; i2.value = c; };
}