console.log("Task 1.A");
function* fibonacciCount(n) {
    let a = 0, b = 1;
    for (let count = 0; count < n; count++) {
        yield a;
        [a, b] = [b, a + b]; 
    }
}
for (let number of fibonacciCount(10)) {
    console.log(number);
}


console.log("Task 1.B");
function* fibonacciMax(maxValue) {
    let a = 0, b = 1;
    while (a <= maxValue) {
        yield a;
        [a, b] = [b, a + b];
    }
}
for (let num of fibonacciMax(10)) {
    console.log(num);
}

console.log("Task 2");
//Shape the Parent
class Shape{
    constructor(){
        this.width = 0;
        this.height = 0;
        this.radius = 0;
    }
    area(){
        console.log("Base Shape Area");
        return 0;
    }

    perimeter(){
        console.log("Base Shape Perimeter");
        return 0;
    }

}
//Rectangle
class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    area(){
        // console.log("Area of Rectangle");
        return this.width * this.height;
    }

    perimeter(){
        // console.log("Perimeter of Rectangle");
        return 2*(this.width + this.height);
    }

}

//Triangle
class Triangle extends Shape{
    constructor(base, height, sideA, sideB, sideC) {
        super();
        this.base = base;
        this.height = height;
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    area() {
        console.log("Area of Triangle");
        return 0.5 * this.base * this.height;
    }

    perimeter() {
        console.log("Perimeter of Triangle");
        return this.sideA + this.sideB + this.sideC;
    }

}


//Circle
class Circle extends Shape{
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        console.log("Area of Circle");
        return Math.PI * this.radius ** 2;
    }

    perimeter() {
        console.log("Circumference of Circle");
        return 2 * Math.PI * this.radius;
    }

}



//Square inherits from rectangle -square is a special case of rect.-
class Square extends Rectangle{
    constructor(side){
        super(side, side);
    }
}

let myShape = new Shape();
console.log(myShape.area()); 
console.log(myShape.perimeter()); 

let myRectangle = new Rectangle(10, 5);
console.log("Area of Rectangle");
console.log(myRectangle.area());//(10*5)=50
console.log("Perimeter of Rectangle");
console.log(myRectangle.perimeter());//(15)*2=30

let mySquare = new Square(4);
console.log("Area of Square");
console.log(mySquare.area()); //(4*4)=16
console.log("Perimeter of Square");
console.log(mySquare.perimeter()); //(4*4)=16

let myTriangle = new Triangle(1, 2, 4, 5, 6);
console.log(myTriangle.area());//(half*1*2)=1
console.log(myTriangle.perimeter());//(4+5+6) = 15

let myCircle = new Circle(3);
console.log(myCircle.area()); 
console.log(myCircle.perimeter());
