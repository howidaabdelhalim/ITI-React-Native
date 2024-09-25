// Day4 - Task3

function nameValidation(name) {
    return /^[a-zA-Z\s]+$/.test(name);
}

function pNumValidation(phoneNumber) {
    return /^\d{8}$/.test(phoneNumber);
}

function mNumValidation(mobileNumber) {
    return /^(010|011|012)\d{8}$/.test(mobileNumber);
}

function emailValidation(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

var username = prompt("Enter your Name:");
var phoneNumber = prompt("Enter your Phone Number (8 digits):");
var mobileNumber = prompt("Enter your Mobile Number (11 digits starting with 010, 011, or 012):");
var email = prompt("Enter your E-mail:");


if (!nameValidation(username)) {
    alert("Invalid name. Please enter only alphabetic characters.");
} else if (!pNumValidation(phoneNumber)) {
    alert("Invalid phone number. It must be exactly 8 digits.");
} else if (!mNumValidation(mobileNumber)) {
    alert("Invalid mobile number. It must be 11 digits and start with 010, 011, or 012.");
} else if (!emailValidation(email)) {
    alert("Invalid email format. Please enter a valid email.");
} else {
    document.write("<h1>Welcome dear guest: "+ username+"</h1>");
    document.write("<br>");
    document.write("<h1>Your Phone Number is: "+ phoneNumber+"</h1>");
    document.write("<br>");
    document.write("<h1>Your Mobile Number is: "+ mobileNumber+"</h1>");
    document.write("<br>");
    document.write("<h1>Your E-mail Address is: "+ email+"</h1>");
}