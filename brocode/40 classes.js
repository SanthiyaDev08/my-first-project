class products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new products("Jeans", 20.99);
product1.displayProduct();
const total1 = product1.calculateTotal(salesTax);
console.log(`Total price (with tax) : $${total1.toFixed(2)}`);

const product2 = new products("Sweater", 25.90);
product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax) : $${total2.toFixed(2)}`);

const product3 = new products("Cap", 5.99);
product3.displayProduct();
const total3 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax) : $${total3.toFixed(2)}`);