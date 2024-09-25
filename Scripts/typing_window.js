var myWin2;
function open2(){
    myWin2 = open("../Pages/empty.html","","width=600,height=300");
    var myString="Day 4 in JS!!"
    var index = 0;
    function typing(){
        if(index < myString.length){
            myWin2.document.write(myString.charAt(index));
            index++;
            setTimeout(typing,50);
        }else{
            setTimeout(function() {
                myWin2.close();
            }, 3000);
        }
    }
    typing();
}
