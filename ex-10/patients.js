function load() {
    let p = [
        { id: 1, name: "Alen", age: 39 },
        { id: 2, name: "Deena", age: 47 },
        { id: 3, name: "Diana", age: 21 },
        { id: 4, name: "Jack", age: 54 },
        { id: 5, name: "Jain", age: 23 },
        { id: 6, name: "Kelvin", age: 61 },
        { id: 7, name: "Louis", age: 69 },
        { id: 8, name: "Rex", age: 49 }
    ];
    
    p.sort((a, b) => b.age - a.age);
    let out = document.getElementById("out");
    out.innerHTML = "Sorted by Age:<br>";
    p.forEach(e => out.innerHTML += e.id + " " + e.name + " " + e.age + "<br>");
    
    let pid = prompt("Enter P-Id to check:");
    let found = p.some(e => e.id == pid);
    out.innerHTML += "<br>P-Id " + pid + " found: " + found + "<br>";
    
    let min = prompt("Enter minimum age:");
    let max = prompt("Enter maximum age:");
    out.innerHTML += "<br>Patients in age range " + min + "-" + max + ":<br>";
    let filtered = p.filter(e => e.age >= min && e.age <= max);
    filtered.forEach(e => out.innerHTML += e.id + " " + e.name + " " + e.age + "<br>");
}