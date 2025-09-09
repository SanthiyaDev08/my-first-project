let username = "";
while(username === "" || username === null){
    username = window.prompt("Enter your name");
}
console.log(`hello ${username}`);


let number  = window.prompt("Enter a number");
let i = 1;
do{
    console.log(i);
    i++;
}while(i <= number);


for (let j = 0; j <= 20; j++){
    if (j == 13)    continue;
    else if (j == 18)    break; 
    else    console.log(j);
}