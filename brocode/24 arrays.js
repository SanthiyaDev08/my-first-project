let fruit = ["plums", "orange", "pineapple", "strawberry"];

console.log(fruit[2]);

console.log(fruit[3][0]);

fruit[1] = "mango";
console.log(fruit);

fruit.push("mango");
console.log(fruit);

fruit.pop();
console.log(fruit);

fruit.unshift("orange");
console.log(fruit);

fruit.shift("orange");
console.log(fruit);

console.log(fruit.length);

let index1 = fruit.indexOf("plums");
let index2 = fruit.indexOf("blueberry");
console.log(index1);
console.log(index2);

for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}
console.log("\n");

for (let i = fruit.length-1; i >= 0; i--){
    console.log(fruit[i]);
}
console.log("\n");


for (let f of fruit){
    console.log(f);
}