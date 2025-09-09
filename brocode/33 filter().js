let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evennum = numbers.filter(iseven);
console.log(evennum);

function iseven(element){
    return element % 2 === 0;
}

let oddnum = numbers.filter(isodd);
console.log(oddnum);

function isodd(element){
    return element % 2 !== 0;
}

let strings = ["Santhiya", "Ram", "Maya", "Siddharth", "Abishek", "Thara", "Arjun"];
let Sstring = strings.filter(string1);
console.log(Sstring);
console.log(strings.filter(string2));

function string1(element){
    if (element.charAt(0) === 'S'){
        return element;
    }
}
function string2(element){
    if (element.charAt(1) === 'a'){
        return element;
    }
}