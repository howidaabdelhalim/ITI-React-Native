var myWin;
function open1(){
    myWin = open("../Pages/window.html","","width=300,height=300");
}
function move1() {
    if(myWin && !myWin.closed){
        myWin.moveBy(245,110); 
        myWin.focus();
    }else if(myWin){
        setTimeout(function() {
            myWin.close();
        }, 2000);
    }
    
}
setInterval(move1, 500);