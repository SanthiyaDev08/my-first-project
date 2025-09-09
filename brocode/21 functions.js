function trying(username, age){
    console.log("keep trying");
    console.log("keep trying");
    console.log("keep trying");
    console.log(`you're more than enough ${username}`);
    console.log(`you're ${age}. you have responsibilities`);
    console.log("keep trying");
    console.log("keep trying");
    console.log("keep trying");
}
trying("Santhiya", 18);

function add(a, b){
    return a+b;
}
let res = add(2, 3);
console.log(res);
console.log(add(3,4));

function isvalidemail(email){
    if (email.includes("@gmail.com")){
        return "yes";
    }
    else {
        return "false";
    }
}
console.log(isvalidemail("Santhiya123@gmail.com"));