function submitform() {
    let username = document.getElementById("name").value;
    let phone = document.getElementById("phno").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let skills = document.getElementById("container").value;
    let result = document.getElementById("result");

    if (username === "" || phone === "" || age === "" || email === "" || skills === "select") {
        result.innerHTML = "Please fill all fields correctly!";
        return;
    }

    result.textContent = `
                          Name : ${username}
                          Age : ${age}
                          PhoneNumber :  ${phone}
                          Email : ${email}
                          Password : ${password}
                          Skills : ${skills}
                          `;
}
function resetform(){
    document.getElementById("googleform").reset();
    result.textContent = "Form has been reset!";
}
function saveasform(){
    const link = document.getElementById("downloadlink");
}
