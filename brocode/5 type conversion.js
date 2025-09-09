//to change the datatype of a value to another (strings, numbers, booleans)

let age = window.prompt("how old are you?");
age = Number(age);
age += 1;
console.log(age, typeof age);

let x, y, z;
x = "0";
y = "4";
z = "0";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x, y, typeof y, z, typeof z);