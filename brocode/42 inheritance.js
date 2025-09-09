class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Dolphin extends Animal{
    name = "dolphin";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
class Penguin extends Animal{
    name = "penguin";
    walk(){
        console.log(`This ${this.name} is walking`);
    }
}
const rabbit = new Rabbit();
const dolphin = new Dolphin();
const penguin = new Penguin();

console.log(rabbit.name, dolphin.name, penguin.name);
console.log(rabbit.alive, dolphin.alive, penguin.alive);
console.log(rabbit, dolphin, penguin);

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

dolphin.eat();
dolphin.sleep();
dolphin.swim();

penguin.eat();
penguin.sleep();
penguin.walk();