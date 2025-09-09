const prices = [5, 10, 15, 20, 25, 30];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(previous , next){
    return previous += next;
}

let strings = ["My ", "name ", "is ", "Santhiya "];
let accumulatedString = strings.reduce(sumString);
console.log(accumulatedString);

function sumString(previous, next){
    previous += next;
    return previous;
}

let grades = [90, 95, 100, 96, 97, 98];
let maximum = grades.reduce(getMax);
console.log(maximum);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}