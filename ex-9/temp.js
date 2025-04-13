function analyze() {
    let t = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82, 88, 91, 92, 90, 93, 87, 80, 78, 79, 72, 68, 61, 59, 55, 65];
    let hot = 0, pleasant = 0, cold = 0;
    let tbl = document.getElementById("result");
    let hdr = tbl.createTHead();
    let row = hdr.insertRow();
    row.insertCell().innerHTML = "Temperature";
    row.insertCell().innerHTML = "Category";
    for(let i = 0; i < t.length; i++) {
        let r = tbl.insertRow();
        r.insertCell().innerHTML = t[i];
        if(t[i] >= 85) {
            r.insertCell().innerHTML = "HOT";
            hot++;
        } else if(t[i] >= 60) {
            r.insertCell().innerHTML = "PLEASANT";
            pleasant++;
        } else {
            r.insertCell().innerHTML = "COLD";
            cold++;
        }
    }
    document.write("HOT days: " + hot + "<br>");
    document.write("PLEASANT days: " + pleasant + "<br>");
    document.write("COLD days: " + cold);
}