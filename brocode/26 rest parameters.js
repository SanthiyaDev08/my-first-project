function hotel(...foods){
    console.log(foods);
}

function getfood(...foods){
    return foods;
}

const food1 = "podi dosa";
const food2 = "sola dosa";
const food3 = "kambu dosa";
const food4 = "masala dosa";
const food5 = "carrot dosa";
const food6 = "curry dosa";
const food7 = "nei dosa";
const food8 = "mutta dosa";
const food9 = "adai dosa";
const food10 = "godhumai dosa";

hotel(food1, food2, food3, food4, food5, food6, food7, food8, food9, food10);

const foods = getfood(food1, food2, food3, food4, food5, food6, food7, food8, food9, food10);
console.log(foods);


function sum(...numbers){
   let result = 0;
   for (let number of numbers){
    result += number;
   }
   return result/numbers.length;
}
const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
console.log(`₹${total}`);