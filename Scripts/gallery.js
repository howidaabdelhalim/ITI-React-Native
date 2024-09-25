var images = ["../Images/1.jpg", "../Images/2.jpg", 
            "../Images/3.jpg", "../Images/4.jpg", 
            "../Images/5.jpg", "../Images/6.jpg"];

var idx=0;
var duration = 0;

function next1(){
    if (idx < images.length-1) {
        idx++; 
    }
    document.getElementById("image").src = images[idx];
}

function previous(){
    if (idx > 0) {
        idx--; 
    }
    document.getElementById("image").src = images[idx];
}

function forSlideShow(){
    if (idx < images.length-1) {
        idx++; 
    }else{ idx =0;}
    document.getElementById("image").src = images[idx];
}

function slideShow(){
    if (!duration) {
        duration = setInterval(forSlideShow, 500);
    }
}

function stop1(){
    clearInterval(duration); 
    duration = 0;
}

