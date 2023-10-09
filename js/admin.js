// admin.js

document.addEventListener("DOMContentLoaded", function () {
    const passwordForm = document.getElementById("passwordForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const adminContent = document.getElementById("adminContent");

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        // Replace these with your actual username and password
        const validUsername = "admin";
        const validPassword = "admin123";

        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            // Correct username and password, show admin content
            passwordForm.style.display = "none";
            adminContent.style.display = "block";
        } else {
            // Incorrect username or password, display an error message
            alert("Incorrect username or password. Please try again.");
            usernameInput.value = "";
            passwordInput.value = "";
        }
    });
});
