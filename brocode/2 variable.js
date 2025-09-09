let x;         //declaration of a variable
x = 10;        // assignment of a variable
console.log(x);

let y = 1234;
console.log(y);

//NUMBERS
let price = 10.99;
console.log(`The price is $${price}`);
console.log("The price is $" + price);
console.log(typeof price);

//STRINGS
let firstname = "Santhiya";
let email = "santhiya123gmail.com";
console.log(typeof firstname);
console.log(`your name is ${firstname}`);
console.log(`your mail id : ${email}`);

//BOOLEANS
let online = true;
let forsale = false;
console.log(`online : ${online}`);
console.log(`cars for sale is ${forsale}`);
console.log(typeof online);

let fullname = "Santhiya Senthil Kumar";
let age = 18;
document.getElementById("one").textContent = fullname;
document.getElementById("two").textContent = `your name is ${fullname}\n ` + "And you age is " + age;