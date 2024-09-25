// Day5 - Task1

document.write("<h1>Adding -- Multiplying -- and Dividing 3 Values</h1>"+"<hr>")
var arr1=[];
for (var i = 0; i < 3; i++) {
    var num = parseInt(prompt("Enter a number"));
    arr1.push(num);    
}
var sum = 0;
for (var i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
var product =1;
for (var i = 0; i < arr1.length; i++) {
    product *= arr1[i];
}
var divid = arr1[0];
for (var i = 1; i < arr1.length; i++) { 
    divid /= arr1[i];
}
document.write("Sum of the 3 values: "+arr1[0]+"+"+arr1[1]+"+"+arr1[2]+"= "+sum+"<br>")
document.write("Product of the 3 values: "+arr1[0]+"*"+arr1[1]+"*"+arr1[2]+"= "+product+"<br>")
document.write("Division of the 3 values: "+arr1[0]+"/"+arr1[1]+"/"+arr1[2]+"= "+divid+"<br>")