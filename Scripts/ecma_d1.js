// Task 1
let x = 4;
let y = 12;
console.log("Before Swapping");
console.log(x);
console.log(y);
[x,y] = [y,x]
console.log("After Swapping");
console.log(x);
console.log(y);


// Task 2 Min Max

function getMinMaxValues(...nums){
    return{
        min: Math.min(...nums),
        max: Math.max(...nums)
    };
}
let arr = [5,2,0,1,7,10];//0,10
let { min, max } = getMinMaxValues(...arr);
console.log("Getting Min Max Values");
console.log(min,max);

// Task 3 Fruits

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];
// Check if every element is a string
let isString = fruits.every(fruit => typeof fruit === "string");
console.log("Check if every element is a string");
console.log(isString);

// check if array elements start with "a"
let startsWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log("Check if some of array elements start with 'a'");
console.log(startsWithA);

// task c new array
let filteredFruits =  fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
console.log("Fruits that start with 'b' or 's'");
console.log(filteredFruits);

// task d,e
let likedFruits =[];
fruits.forEach(fruit => {
    likedFruits.push("I Like "+ fruit);
});
console.log(likedFruits);