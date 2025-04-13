function book() {
    let s = new Array(10).fill(0);
    let n = prompt("Enter name:");
    while(n) {
        let c = prompt("Enter 1 for First Class, 2 for Economy:");
        let seat = -1;
        if(c == 1) {
            for(let i = 0; i < 5; i++) {
                if(s[i] == 0) {
                    s[i] = 1;
                    seat = i + 1;
                    break;
                }
            }
            if(seat == -1) {
                let a = prompt("First Class full. Accept Economy? (yes/no)");
                if(a == "yes") {
                    for(let i = 5; i < 10; i++) {
                        if(s[i] == 0) {
                            s[i] = 1;
                            seat = i + 1;
                            break;
                        }
                    }
                }
            }
        } else if(c == 2) {
            for(let i = 5; i < 10; i++) {
                if(s[i] == 0) {
                    s[i] = 1;
                    seat = i + 1;
                    break;
                }
            }
            if(seat == -1) {
                let a = prompt("Economy full. Accept First Class? (yes/no)");
                if(a == "yes") {
                    for(let i = 0; i < 5; i++) {
                        if(s[i] == 0) {
                            s[i] = 1;
                            seat = i + 1;
                            break;
                        }
                    }
                }
            }
        }
        let cl = seat <= 5 ? "First Class" : "Economy";
        if(seat != -1) {
            document.getElementById("pass").innerHTML = "Name: " + n + "<br>Seat: " + seat + "<br>Class: " + cl;
        } else {
            document.getElementById("pass").innerHTML = "No seats available.";
        }
        n = prompt("Enter next name (or leave blank to exit):");
    }
}