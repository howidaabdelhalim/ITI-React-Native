// Day3 - Task2

var sum =0;
var num =0;
do {
    var input = prompt("Enter a Number:");
    num = Number(input);
    sum += num;
} while (num != 0 && sum < 100);

alert("The total: " + sum);