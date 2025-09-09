let age = 25;
let message = age >= 18 ? "You're an adult" : "You're minor";
console.log(message);
let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);