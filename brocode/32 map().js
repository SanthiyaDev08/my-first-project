const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
console.log(squares);

function square(element){
    return Math.pow(element, 2);
}


const strings = ["applE", "orANge", "baNaNa", "piNeaPPlE"];
const capitalized = strings.map(capitalize);
console.log(capitalized);

function capitalize(sentence){
    let words =  sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    return words;
}

const dates = ["2025-1-10", "2025-1-11", "2025-1-12", "2025-1-13"];
const date = dates.map(ordereddate);
console.log(date);

function ordereddate(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}