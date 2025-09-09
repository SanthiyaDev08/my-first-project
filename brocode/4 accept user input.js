// using window prompt
let username;
username = window.prompt("What's your username?");
console.log(username);
// html textbox
let name1;
document.getElementById("mysubmit").onclick = function(){
    name1 = document.getElementById("mytext").value;
    document.getElementById("myh2").textContent = `Welcome to the page ${name1}`;
    console.log(name1);
}