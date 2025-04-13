function run() {
    document.getElementById("h1").innerHTML = "Updated Title";
    
    document.getElementsByName("username")[0].value = "John Doe";
    let g = document.getElementsByName("gender");
    for(let i = 0; i < g.length; i++) {
        if(g[i].checked) console.log(g[i].value);
    }
    
    let p = document.getElementsByTagName("p");
    console.log("Paragraph count: " + p.length);
    let l = document.getElementsByTagName("li");
    for(let i = 0; i < l.length; i++) {
        console.log(l[i].textContent);
    }
    
    let i = document.getElementsByClassName("input-field");
    for(let j = 0; j < i.length; j++) {
        i[j].style.backgroundColor = "lightblue";
    }
    
    document.querySelector(".info").textContent = "This is the first info paragraph";
    document.querySelector("input[name=gender]").checked = true;
    
    let pi = document.querySelectorAll(".info");
    pi.forEach(e => console.log(e.textContent));
    let h = document.querySelectorAll(".hobby");
    h.forEach(e => { e.checked = true; if(e.checked) console.log(e.value); });
}