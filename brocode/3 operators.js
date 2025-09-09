let students = 30;
students = students + 20;
students = students - 10;
students = students * 2;
students = students / 2;
students = students ** 2;
students = students % 3;
students += 1;  //augmented assignment operators

//post and pre increment
console.log(students);
students++;
console.log(students);
++students;
//post and pre decrement
console.log(students);
students--;
console.log(students);
--students;
console.log(students);

//operator precendence
/*  | parenthesis()
    | exponents
    | multiply and divide and modulo
    | add and sub     */
let result1 = 1 + 2 * 3 + 4**2;
console.log(result1);
let result2 = 12 % 5 + 8 / 2;
console.log(result2);
