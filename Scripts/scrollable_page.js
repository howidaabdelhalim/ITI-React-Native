var myWin3;
function scrollWindow() {
    if (myWin3 && !myWin3.closed) {
        myWin3.scrollBy(0, 50);//(X,Y)
        if (myWin3.scrollY + myWin3.innerHeight >= myWin3.document.body.scrollHeight) {
            myWin3.close();
        } else {
            setTimeout(scrollWindow, 50);
        }
    }
}
function open3() {
    myWin3 = window.open("../Pages/lorem.html", "", "width=300,height=300");
    setTimeout(scrollWindow, 500);
}
