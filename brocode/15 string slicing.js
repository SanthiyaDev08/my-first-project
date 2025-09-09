const fullname = "Santhiya Senthil Kumar";
let firstname = fullname.slice(0, fullname.indexOf(" "));
console.log(firstname);

let lastname = fullname.slice(fullname.indexOf(" ") + 1, fullname.length);
console.log(lastname);

let firstchar = fullname.slice(0, 1);
console.log(firstchar);

let lastchar = fullname.slice(-4);
console.log(lastchar);

const email = "santhiya123@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);
