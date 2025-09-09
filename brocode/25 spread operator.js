let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum, minimum);

let strings = "Santhiya";
let letters = [...strings];
console.log(letters);

let username = "Santhiya Senthil Kumar";
let letter = [...username].join(".");
console.log(letter);

let fruits = ["plums", "orange", "pineapple", "strawberry"];
let veggies = ["brinjal", "tomato", "potato", "onion"];
let foods = [...fruits, ...veggies, "eggs", "milk"];
console.log(foods);                           