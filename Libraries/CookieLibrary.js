function setCookie(cookieName, cookieValue, expiryDate){
    var cookieString = cookieName + "=" + encodeURIComponent(cookieValue);
    if (expiryDate) {
        cookieString += ";expires=" + expiryDate.toUTCString();
    }
    cookieString += ";path=/";
    document.cookie = cookieString;
}

function getCookie(cookieName){
    var cookieArray = document.cookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookiePair = cookieArray[i].split('=');
        if(cookiePair[0].trim()==cookieName){
            return cookiePair[1].trim();
        }
        // else{}
    }
    return null;
}

// to delete a cookie set the expire date to a past date
function deleteCookie(cookieName){
    var today = new Date();
    today.setMonth(today.getMonth()-10);
    document.cookie = cookieName+" =;expires= "+today;
}

function allCookieList() {
    var cookieArray = document.cookie.split(';');
    var assArray = {};
    for (var i = 0; i < cookieArray.length; i++) {
        var cookiePair = cookieArray[i].split('=');
        var key = cookiePair[0].trim();
        var value = decodeURIComponent(cookiePair[1]);
        assArray[key] = value;
    }
    return assArray;
}

function hasCookie(cookieName) {
    return getCookie(cookieName) !== null;
}

