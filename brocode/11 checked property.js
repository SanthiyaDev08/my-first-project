const CheckBox = document.getElementById("checkbox");
const Male = document.getElementById("male");
const Female = document.getElementById("female");
const Others = document.getElementById("others");
const Submit = document.getElementById("submit");
const SubResult = document.getElementById("subresult");
const GenResult = document.getElementById("genresult");

Submit.onclick = function(){
    if (CheckBox.checked){
        SubResult.textContent = "You are Subscribed! ^o^";
    }
    else {
        SubResult.textContent = "You are not Subscribed! -_-";
    }
    if (Male.checked){
        GenResult.textContent = "You are Male!";
    }
    else if (Female.checked){
        GenResult.textContent = "You are Female!";
    }
    else if (Others.checked){
        GenResult.textContent = "You are Others!";
    }
    else {
        GenResult.textContent = "Oh come on select your gender you punk!!"
    }
}