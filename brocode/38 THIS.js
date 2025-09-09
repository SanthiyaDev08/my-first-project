let person = {
    firstname: "Hermoine",
    lastname: "Granger",
    age: 19,
    gryffindor: true,
    sayhello: function() { console.log(`Hii there I'm ${this.firstname}. I'm ${person.age} years old. And I love to study...!`)},
//we can't use arrow functions during the usage of 'this'.
};
person.sayhello();

const colors = ["red", "blue", "green", "orange", "purple"];
colors.forEach(function(color){
    const button = document.createElement("button");   //create a new button but dont show it.
    button.innerText = color.charAt(0).toUpperCase() + color.slice(1).toLowerCase();
    button.setAttribute("data-color", color);
    button.addEventListener("click", function(){
        const selectedColor = this.getAttribute("data-color");
        this.style.backgroundColor = selectedColor;
    });
    document.body.appendChild(button);
});