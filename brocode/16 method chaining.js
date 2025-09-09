// ------ NO METHOD CHAINING ------
let username1 = window.prompt("Enter your name");
username1 = username1.trim();
let letter1 = username1.charAt(0);
letter1 = letter1.toUpperCase();
//console.log(letter1);
let extrachar1 = username1.slice(1);
extrachar1 = extrachar1.toLowerCase();
//console.log(extrachar1);
username1 = letter1 + extrachar1;
console.log(username1);

// ------ METHOD CHAINING ------
let username2 = window.prompt("Enter your name");
username2 = username2.trim().charAt(0).toUpperCase() + username2.trim().slice(1).toLowerCase();
console.log(username2);
