var queryString = location.search.replace("?", ""); 
var params = queryString.split("&");
var assArray = [];
for (var i = 0; i < params.length; i++) {
    var Key = params[i].split("=")[0];
    var Val = params[i].split("=")[1];
    assArray[Key] = decodeURIComponent(Val).replace(/\+/g, ' '); 
}

var name = assArray["name"];
var gender = assArray["gender"];
var address = assArray["address"];
var mobile = assArray["mobile"];
var email = assArray["email"];

var profileInfo = `
    <h3 class="display-4">Welcome, ${name}!</h3>
    <p class="lead">Your gender is: <strong>${gender}</strong></p>
    <p class="lead">You live at: <strong>${address}</strong></p>
    <p class="lead">Your mobile number is: <strong>${mobile}</strong></p>
    <p class="lead">Your email is: <strong>${email}</strong></p>
`;

document.getElementById('profile-info').innerHTML = profileInfo;

function isChrome() {
    var userAgent = navigator.userAgent;
    return /Chrome/.test(userAgent) && !/Edge/.test(userAgent) && !/OPR/.test(userAgent);
}

var recom = document.getElementById('reco');
if (!isChrome()) {
    recom.classList.replace("alert-info", "alert-danger");
    recom.innerHTML = "Kindly Switch to Chrome";
} else {
    recom.classList.replace("alert-info", "alert-success");
    recom.innerHTML = "You're Using Chrome";
}

