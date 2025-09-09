let numbers = [1, 2, 3, 4, 5];

//numbers.forEach(double);
//numbers.forEach(triple);
numbers.forEach(cube);
numbers.forEach(display);

/*
First argument: The current element in the array (e.g., element).
Second argument: The index of that element in the array (e.g., index).
Third argument: The entire array being iterated over (e.g., array).
*/
function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

let fruits = ["apPle", "banAna", "oRAnge"];
fruits.forEach(capitalize);
fruits.forEach(display);
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
function display(element){
    console.log(element);
}
