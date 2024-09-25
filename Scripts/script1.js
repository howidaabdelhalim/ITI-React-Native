// Day6 REMEMBER DEADLINE OF COURSERAA

// #region Date
// Built In Object: Date
var today = new Date();
// document.write(today);
// document.write(today.getMonth());//11 month [0-11]
// document.write(today.getDay());//[sunday is 0]
// document.write(today.getFullYear());//1900 is the base year '0'
// document.write(today.getFullYear());//2024 mazbota
// document.write();
// var after =today.setMonth( today.getMonth()+2 );
// document.write(after);
/*Remeber me of the facebook bicreate date with the method today and bi3ml m3ad 3lshan y-logoff due to security */
// #endregion

// BOM Brower Object Model written in copy

// #region Window [Open - close - moveTo - moveBy]

// Two buttons in the 1st page the 1st button will create new page and by pressing the second button it will be closed
// var myWin;
// function open1(){
//     myWin = open("../Pages/first_page.html","","width=500,height=500");
// }

// function close1(){
//     if(myWin){
//         myWin.close();
//     }
// }

// function move1(){
//     if(myWin && !myWin.closed){
//         myWin.moveTo(150,150); //(X-axis, Y-axis)
//         myWin.focus();
//     }
// }

// function move2(){
//     if(myWin && !myWin.closed){
//         myWin.moveBy(150,150); //(X-axis, Y-axis)
//         myWin.focus();
//     }
// }
//#endregion

// #region Window [setTimeOut Vs setInterval tmam][ClearTime Vs ClearInterval]
// setInterval("alert('Hello')",5000) parsing everytime

// function hello(){
//     alert('Hello');
// }
// setInterval(hello(),3000); Wrong
// setInterval(hello,3000);  best practice

// Function Inside interval
// var myInterval = setInterval(function(){
//     alert('Hello');
// },3000)
// clearInterval(myInterval)

// var myInterval;
// function startInterval(){
//     myInterval = setInterval(function(){
//         alert('Hello');
//     },3000)
// }

// function stopInterval(){
//     clearInterval(myInterval)
// }
// setTimeout()
// setTimeout(function(){
//     alert('TimeOut Run Successfully');
//     clearInterval(myInterval);
//     alert('Interval Deleted Successfully');
// },12000);

// #endregion

// #region JS LifeCycle
// var x=10;
// console.log(x);
// console.log("Before TimeOut");
// setTimeout(function(){
//     alert("TimeOut");
// },3000);
// console.log("After TimeOut");
// #endregion

// #region 2nd object in Window is navigator
// console.log(navigator.languages);
// console.log(navigator.userAgent);
// if(navigator.userAgent.includes("Chrome/")){
//     document.write("Welcome in Chrome")
// }else{
//     document.write("Use Chrome")
// }
// #endregion
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Day 7
// BOM => Window [Navigator, Screen, ..]
// #region Location
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.protocol);
// assign() / replace() /reload()
// creen elf tudy
// History .back() <- / .forward() -> / .go(num)


// #endregion

// #region DOM
// document [bgColor - fgColor - title - Cookie]
// Method [write() - writeln()]
/*
1) getElementById()
2) getElementsByClassName()
3) getElementsByTagName()
4) getElementsByName()

5) querySelector()
6) querySelectorAll()
*/ 
// #endregion

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Day 8 day 6 da3tt
// #region
// Cookie

document.cookie = "name=John";//session non pressistant
document.cookie = "name=John; expires";
// #endregion

// #region User Defined Object
// var obj = {};
// obj.name = "John";
// obj.age = 25;
// obj.phone=['07263457','983740174'];
// obj.address="California USA";

// var obj = {
//     name: "John",
//     age: 25,
//     show: function(){
//         return "Welcome "+ obj.name;
//     }
// }
// console.log(obj.show());

// this is the window object
var obj = {
    name: "Ali",
    age: 25,
    displayy: function(){
        return "Welcome "+ obj.name+" your age is = "+obj.age;
    },
    displayy2: function(){
        return "Welcome "+ this.name+" your age is = "+this.age;
    },
    displayy3: function(){
        // 
        setTimeout(function(){
            console.log("Welcome "+ this.name+" your age is = "+this.age);
            // console.log("Welcome "+ obj.name+" your age is = "+obj.age);
        },3000)
    }
};

// console.log(obj.displayy());
// console.log(obj.displayy2()); //this now is obj
console.log(obj.displayy3());
// التطور الطبيعي بتاع الحاجة الساقعه؟
// #endregion
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*  1-var [scoops] => Hoisting
    2-User Defined Function
    3-Objects[4 categories]
*/
// function myFun(){
//     alert('HIII');
// }

// Hoisting
// console.log(x); //Undefined
// var x=10;
// console.log(x); //10

// console.log(ShowHello()); //Hello
// function ShowHello(){
//     return 'Hello';
// }
// console.log(ShowHello()); //Hello

//Anonymus function
// u(); //Type Error ghlta felcode 3ndi. ==>
// var u = function (){console.log('Hello')};
// u();




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// document.write("HELLO")

//Define a variable

// var y = "Hello";
//Let, const are defined in ECMAScript

// var x = 10;
// console.log(x);
// console.log(typeof(x));
// x = "Hello";
// console.log(x);
// console.log(typeof(x));
// x = true;
// console.log(x);
// console.log(typeof(x));

// IF ELSE
// if(true){
// }
// else if(){
// }
// else{
// }

// SWITCH CASE
// var x;
// switch(x){
//     case 10:
//         //code
//     break;

//     case 100:
//         //code
//     break;

//     case 90:
//         //code
//     break;

//     case 1:
//         //code
//     break;

//     default:
//         //code
//     break;
// }

//Methods to communicate with user [alert - confirm - pr]
// 1) alert() ==> show Information
// 2) prompt() ==> taake data from user
// var username = prompt("Enter Name");
// var num1 = prompt("Enter 1st Number");
// var num2 = prompt("Enter 2nd Number");

// alert(parseInt(num1)+parseInt(num2))
// 3) confirm [Question] ==> true | false
// var con = confirm("Do you want to Exit?");
// // console.log(con);
// if(con){
//     alert("Bye");
// }else{
//     alert("Enjoy with us")
// }
