var idx = 0;
var isPaused = false;
var marbles = document.querySelectorAll('.marble');

function moveMarble(){
    if (isPaused) 
        return true;
    marbles[idx].src = '../Images/marble1.jpg';
    // idx += 1;
    idx = (idx + 1) % marbles.length;
    marbles[idx].src = '../Images/marble2.jpg';
}
function handleMouseEnter(event) {
    isPaused = true;
}

function handleMouseLeave(event) {
    isPaused = false;
}

marbles.forEach(function(marble) {
    marble.addEventListener('mouseenter', handleMouseEnter);
    marble.addEventListener('mouseleave', handleMouseLeave);
});

setInterval(moveMarble, 500);