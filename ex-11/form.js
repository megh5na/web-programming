function showTime() {
    setInterval(() => {
        let d = new Date();
        document.getElementById("time").textContent = "Time: " + d.toLocaleTimeString();
    }, 1000);
}
function validate() {
    let n = document.getElementById("n").value;
    let a = document.getElementById("a").value;
    let z = document.getElementById("z").value;
    let c = document.getElementById("c").value;
    let p = document.getElementsByName("phone")[0].value;
    let e = document.getElementById("e").value;
    let pw = document.getElementById("pw").value;
    let vp = document.getElementById("vp").value;
    let pan = document.getElementById("pan").value;
    
    if(!n) { alert("Please enter your name!"); document.getElementById("n").focus(); return; }
    if(n.length > 15) { alert("Name should not exceed 15 characters"); document.getElementById("n").focus(); return; }
    if(!a) { alert("Address is required"); document.getElementById("a").focus(); return; }
    if(!z || isNaN(z) || z.length > 6) { alert("Zip code must be numeric and max 6 digits"); document.getElementById("z").focus(); return; }
    if(!c) { alert("Please select country"); document.getElementById("c").focus(); return; }
    let g = document.getElementsByName("gender");
    let gsel = false;
    for(let i = 0; i < g.length; i++) if(g[i].checked) gsel = true;
    if(!gsel) { alert("Please select gender"); return; }
    let pr = document.getElementsByName("pref");
    let prsel = false;
    for(let i = 0; i < pr.length; i++) if(pr[i].checked) prsel = true;
    if(!prsel) { alert("Please select preferences"); return; }
    if(!p || isNaN(p) || p.length > 10) { alert("Phone must be numeric and max 10 digits"); document.getElementById("p").focus(); return; }
    let em = e.includes("@") && e.includes(".");
    if(!em) { alert("Invalid email syntax"); document.getElementById("e").focus(); return; }
    let hasNum = /\d/.test(pw);
    let hasSpec = /[!@#$%^&*]/.test(pw);
    if(pw.length < 6 || pw.length > 15 || !hasNum || !hasSpec) {
        alert("Password must be 6-15 chars with number and special char");
        document.getElementById("pw").focus();
        return;
    }
    if(pw != vp) { alert("Passwords do not match"); document.getElementById("vp").focus(); return; }
    let panPat = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    if(!panPat.test(pan) || pan.length != 10) {
        alert("PAN must be 10 chars: 5 letters, 4 numbers, 1 letter");
        document.getElementById("pan").focus();
        return;
    }
    
    let gval = "";
    for(let i = 0; i < g.length; i++) if(g[i].checked) gval = g[i].value;
    let prval = [];
    for(let i = 0; i < pr.length; i++) if(pr[i].checked) prval.push(pr[i].value);
    alert("Form Content:\nGender: " + gval + "\nCountry: " + c + "\nPreferences: " + prval.join(","));
}