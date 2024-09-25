// Day5 - Task3

var radius = prompt("Enter the radius of the circle:");
radius = parseFloat(radius);
var area = Math.PI * Math.pow(radius, 2);
alert("The Area the entered radius is: "+area);

var num = prompt("Enter a number to get the square root of it:");
num = parseFloat(num);
var sqrt = Math.sqrt(num);
alert("The Square root of the entered number is: "+sqrt);

var angle = prompt("Enter an angle to get the cosine of it:");
angle = parseFloat(angle);
var cos = Math.cos(angle * Math.PI / 180);
alert("The Cosine of the entered angle is: "+cos.toFixed(2));