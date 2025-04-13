function calc() {
    let w = document.getElementById("w").value;
    let h = document.getElementById("h").value;
    let g = document.getElementById("g").value;
    let bmi = w / (h * h);
    let stat = "";
    if(g == "f") {
        if(bmi < 17.50) stat = "Anorexia";
        else if(bmi <= 19.10) stat = "Underweight";
        else if(bmi <= 25.80) stat = "Ideal Range";
        else if(bmi <= 27.30) stat = "Marginally overweight range";
        else if(bmi <= 32.30) stat = "Overweight range";
        else stat = "Very overweight or Obese range";
    } else {
        if(bmi < 17.50) stat = "Underweight";
        else if(bmi <= 20.70) stat = "Underweight";
        else if(bmi <= 26.40) stat = "Ideal Range";
        else if(bmi <= 27.80) stat = "Marginally overweight range";
        else if(bmi <= 31.10) stat = "Overweight range";
        else stat = "Very overweight or Obese range";
    }
    alert("BMI: " + bmi.toFixed(2) + "\nStatus: " + stat);
}