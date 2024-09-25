// Day4 - Task2

var msg1 =prompt("Enter a Message:");
var caseSensitive = confirm("Do you want to consider case sensitivity?");
function isPalin(str, caseSensitive) {
    if (!caseSensitive) {
        str = str.toLowerCase();
    }

    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
if (isPalin(msg1, caseSensitive)) {
    alert("The entered message is a palindrome.");
} else {
    alert("The entered message is not a palindrome.");
}