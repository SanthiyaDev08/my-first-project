let hello = function(){
    console.log("Hello World!");
}
hello();
setTimeout(hello, 3000);

setTimeout(function(){
    console.log("Hello Buddy!!");
}, 4000);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isEven = num1.filter(function(element){
    return element % 2 === 0;
});
console.log(isEven);

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = num2.reduce(function(accumulator, element){
    return accumulator += element;
});
console.log(sum);

