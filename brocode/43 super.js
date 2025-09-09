/* super - keyword is used in classes to call the constructor or access
the properties and methods of a parent (superclass)
super = parent
this  = child
*/


class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} mph`);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runspeed);
    }
}
class Penguin extends Animal{
    constructor(name, age, walkspeed){
        super(name, age);
        this.walkspeed = walkspeed;
    }
    walk(){
        console.log(`This ${this.name} can walk`);
        super.move(this.walkspeed);
    }
}
class Dolphin extends Animal{
    constructor(name, age, swimspeed) {
        super(name, age);
        this.swimspeed = swimspeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimspeed );
    }
}

const rabbit = new Rabbit("rabbit", 10, 25);
const dolphin = new Dolphin("dolphin", 8, 40);
const penguin = new Penguin("penguin", 5, 3);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
console.log(rabbit);

console.log(dolphin.name);
console.log(dolphin.age);
console.log(dolphin.swimspeed);
console.log(dolphin);

console.log(penguin.name);
console.log(penguin.age);
console.log(penguin.walkspeed);
console.log(penguin);

rabbit.run();
dolphin.swim();
penguin.walk();
