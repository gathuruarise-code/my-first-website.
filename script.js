
const button = document.getElementById("myButton");

const message = document.getElementById("message");

button.addEventListener("click", function() {
    message.textContent = "You have successfully connected JavaScript!";
});
