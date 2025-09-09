const PI = 3.14159;
let radius;
let circumference;
document.getElementById("confirm").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("result").textContent = `The circumference of the circle is ${circumference}`;
    //console.log(circumference);
}