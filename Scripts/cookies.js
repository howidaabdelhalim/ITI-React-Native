// console.log(location.search) //?name=Howida&age=20&gender=female&color=blue
var visitCount;

function countVisit() {
    var visitCountCookie = getCookie('visitCount');
    if (visitCountCookie) {
        visitCount = parseInt(visitCountCookie, 10);
        if (isNaN(visitCount)) {
            visitCount = 1;
        } else {
            visitCount += 1;
        }
    } else {
        visitCount = 1;
    }

    var expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    setCookie('visitCount', visitCount, expiryDate);
}

function displayData() {
    countVisit();

    var queryString1 = location.search.substring(1); 
    var params1 = queryString1.split("&");
    var assArray1 = {};
    
    for (var i = 0; i < params1.length; i++) {
        var keyValue = params1[i].split("=");
        var key = decodeURIComponent(keyValue[0]);
        var value = decodeURIComponent(keyValue[1]);
        assArray1[key] = value;
    }
    var favoriteColor = assArray1.color;

    var nameInfoElement = document.getElementById('nameInfo');
    nameInfoElement.innerHTML = "<h1>Welcome</h1> <span style='color: " + 
                                favoriteColor + ";'>" + (assArray1.name) + 
                                "</span>, you've visited this site <span style='color: " + 
                                favoriteColor + ";'>" + visitCount + "</span> times :)";

    var genderImageDiv = document.getElementById('genderImage');
    if (assArray1.gender == 'male') {
        genderImageDiv.innerHTML = '<img src="../Images/cookie1.jpg" alt="Male">';
    } else {
        genderImageDiv.innerHTML = '<img src="../Images/cookie2.jpg" alt="Female">';
    }
}

window.onload = displayData;




// Just Testing
// setCookie('testCookie1', 'testValue1');
// console.log(getCookie('testCookie1')); 

// var expiryDate = new Date();
// expiryDate.setDate(expiryDate.getDate()+89);
// setCookie('testCookieExpiry', 'expiryValue', expiryDate);
// console.log(getCookie('testCookieExpiry')); 