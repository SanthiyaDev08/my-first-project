let hello = (username) => console.log(`Hello ${username}!!╰(*°▽°*)╯`);
hello("Santhiya");
setTimeout(hello, 3000, "Sathya");

setTimeout(() => console.log("Hello Buddy!!"), 4000);

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const ages = age => {
    if (age == 18){
        console.log("You are eligible to vote!");
    }
    else{
        console.log("You are not eligible to vote!!");
    }
}
ages(18);