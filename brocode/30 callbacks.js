hi(welcome, "santhiya");
function hi(callback, name){
    console.log("hi");
    callback(name);
}
function welcome(n){
    console.log("welcome " + n);
}

//------------------------------------------------------------------
sum(displayConsole, 1, 2);
sum(displayPage, 1, 2);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myh1").textContent = result;
}

//------------------------------------------------------------------
function uploadFile(callback){
    console.log("Uploading file...");
    setTimeout(() => {
        console.log("File uploaded.");
        callback();
    }, 4000);
}
function enableSendBtn(){
    console.log("Send button is now enabled.");
}
uploadFile(enableSendBtn);

//------------------------------------------------------------------
function step1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1 done");
            resolve("Result from Step 1");
        }, 5000);
    });
}
function step2(result1){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step2 done using : ", result1);
            resolve("Result from Step 2");
        }, 5000);
    });
}
function step3(result2){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step3 done using : ", result2);
            resolve("Result from Step 3");
        }, 5000);
    });
}
let result1 = 5;
step1().then(result1 => step2(result1))
step2(result1).then(result2 => step3(result2)).then(result3 => {
    console.log("All steps done!!");
}).catch(error => {
    console.error("Something went wrong : " , error);
});
