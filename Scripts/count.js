// Day4 - Task1

var msg = prompt("Enter a Message:");
var letter = prompt("Enter a letter in the message to count (as 'l' in 'Hello'):");
var caseSensitive = confirm("Do you want to consider case sensitivity?");

function countLetter(str, letter, caseSensitive) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (caseSensitive) {
            if (str[i] === letter) {
                count++;
            }
        } else {
            if (str[i].toLowerCase() === letter.toLowerCase()) {
                count++;
            }
        }
    }

    return count;
}
var count = countLetter(msg, letter, caseSensitive);
alert("The letter '" + letter + "' appears " + count + " time(s) in the message.");