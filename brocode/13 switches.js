let day = 3;
switch(day){
    case 1: console.log("It is Sunday");break;
    case 2: console.log("It is Monday");break;
    case 3: console.log("It is Tuesday");break;
    case 4: console.log("It is Wednesday");break;
    case 5: console.log("It is Thursday");break;
    case 6: console.log("It is Friday");break;
    case 7: console.log("It is Saturday");break;
    default: console.log(`${day} is not a day`);
}

let score = 95;
let grade;
switch (true) {
    case score >= 90: grade = "A"; break;
    case score >= 80: grade = "B"; break;
    case score >= 70: grade = "C"; break;
    case score >= 60: grade = "D"; break;
    case score >= 50: grade = "E"; break;
    default: grade = "F"; break;
}
console.log(grade);