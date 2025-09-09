const haslicense = false;
const click = document.getElementById("click").onclick = function(){
    age = document.getElementById("age").value;
    if (age >= 18){
        console.log("Congratulations buddy you are old enough to drive!");
        if (haslicense){
            console.log("Wow you have a license to drive");
        }
        else{
            console.log("how can you so irresponsible about not having a license. go away before i am gonna beat the shit out of you!!! you prick!!")
        }
    }
    else if (age <= 0){
        console.log("Oh come on!! Don't you think this is a old grandfather joke. get out before i am gonna smack your head you punk!!");
    }
    else {
        console.log("little brat!! under the age GO AWAYYYYYY!!!!!");
    }
}
