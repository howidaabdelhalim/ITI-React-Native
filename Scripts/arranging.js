// Day5 - Task2

document.write("<h1>Sorting 5 Values</h1>"+"<hr>")
var arr2=[];
for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt("Enter a number"));
    arr2.push(num);    
}
var descend = arr2.sort((a,b)=>b-a);
var ascend = arr2.sort((a,b)=>a-b);

document.write("You've entered the values of: "+arr2+"<br>");
document.write("Your values after being sorted descending: "+descend+"<br>");
document.write("Your values after being sorted ascending: "+ascend+"<br>");