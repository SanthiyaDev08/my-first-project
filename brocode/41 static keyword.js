class mathWork{
    static PI = 3.14159;
    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(mathWork.PI);
console.log(mathWork.getDiameter(10));
console.log(mathWork.getCircumference(10));
console.log(mathWork.getArea(10));


class user{
    static userCount = 0;

    constructor(username) {
        this.username = username;
        user.userCount++;
    }
    sayHello = () => console.log(`Hello ${this.username}😍`);
    static getuserCount = () => console.log(`There are ${user.userCount} users online.`);
}
const user1 = new user("Santhiya");
const user2 = new user("Thara");
console.log(user1.username);
console.log(user1.userCount);
console.log(user2.username);
console.log(user2.userCount);
user1.sayHello();
user2.sayHello();
user.getuserCount();