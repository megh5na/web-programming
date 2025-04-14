let b = {
    x: ["A", "B", "C", "D"],
    y: [10, 15, 13, 17],
    type: "bar",
    marker: { color: ["#FF6347", "#4682B4", "#32CD32", "#FFD700"] }
};
let bl = {
    title: { text: "Bar Chart" },
    xaxis: { title: "Categories" },
    yaxis: { title: "Values" }
};
Plotly.newPlot("b", [b], bl);

let l = {
    x: ["Jan", "Feb", "Mar", "Apr"],
    y: [20, 14, 25, 16],
    type: "scatter",
    mode: "lines+markers",
    marker: { color: "#FF4500" },
    line: { color: "#FF4500" }
};
let ll = {
    title: { text: "Line Chart" },
    xaxis: { title: "Months" },
    yaxis: { title: "Sales" }
};
Plotly.newPlot("l", [l], putll);

let p = {
    labels: ["Red", "Blue", "Green", "Yellow"],
    values: [30, 25, 20, 25],
    type: "pie",
    marker: { colors: ["#FF0000", "#0000FF", "#008000", "#FFFF00"] }
};
let pl = {
    title: { text: "Pie Chart" },
    showlegend: true
};
Plotly.newPlot("p", [p], pl);

let d = {
    labels: ["Apple", "Banana", "Orange", "Grape"],
    values: [40, 30, 20, 10],
    type: "pie",
    hole: 0.4,
    marker: { colors: ["#FF69B4", "#FFA500", "#00CED1", "#800080"] }
};
let dl = {
    title: { text: "Donut Chart" },
    showlegend: true
};
Plotly.newPlot("d", [d], dl);