function generatePassword(password_length, include_lowercase, include_uppercase, include_special, include_digits){
    const lowerchars = "abcdefghijklmnopqrstuvwxyz";
    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numchars = "1234567890";
    const specialchars = "~!@#$%^&*()_+=-`:;'./?";

    let allowedchars = "";
    let password = "";

    allowedchars += include_lowercase ? lowerchars : "";
    allowedchars += include_uppercase ? upperchars : "";
    allowedchars += include_digits ? numchars : "";
    allowedchars += include_special ? specialchars : "";
    
    if (password_length < 8){
        return "(password length must be atleast 8)";
    }
    if (allowedchars.length === 0){
        return "(8 set of characters need to selected)";
    }
    for (let i = 0; i < password_length; i++){
        const randomindex =  Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }
    return password;
}
const password_length = 8;
const include_uppercase = true;
const include_lowercase = true;
const include_special = false;
const include_digits = true;
const password = generatePassword(password_length, include_lowercase, include_uppercase, include_special, include_digits);
console.log(password);