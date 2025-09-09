const min = 1;
const max = 100;
const result = Math.floor(Math.random() * (max)) + min;
//console.log(result);
let attempts = 0;
let guess;
let running = true;
while (running){
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);
    if (isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if (guess < min || guess > max){
        window.alert(`Please enter a number between ${min} - ${max}`);
    }
    else{
        attempts++;
        if (guess < result){
            window.alert("To low!! try again !!");

        }
        else if (guess > result){
            window.alert("To high!! try again !!");
        }
        else {
            if (attempts <= 5){
                window.alert(`You're a PRO gamer !! Congratulations! You won the match. The answer is ${result} and you took ${attempts} to get the answer correctly!!`);
            }
            else{
                window.alert(`Congratulations! You won the match. The answer is ${result} and you took ${attempts} to get the answer correctly!!`);

            }
            running = false;
        }
    }    
}
