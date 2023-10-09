// Sample hardcoded password (for demonstration purposes)
const adminPassword = "password123";

// Menu items array (for demonstration purposes)
let menuItems = ["Coffee", "Tea", "Croissant", "Muffin", "Sandwich"];

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const adminContent = document.getElementById("adminContent");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");
    const menuList = document.getElementById("menuList");
    const addItemBtn = document.getElementById("addItemBtn");
    const deleteItemBtn = document.getElementById("deleteItemBtn");

    loginBtn.addEventListener("click", function () {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === adminPassword) {
            // Correct password, show admin content
            loginForm.style.display = "none";
            adminContent.style.display = "block";
            displayMenuItems();
        } else {
            // Incorrect password, display an error message
            alert("Incorrect password. Please try again.");
            passwordInput.value = "";
        }
    });

    addItemBtn.addEventListener("click", function () {
        const newItem = prompt("Enter a new menu item:");
        if (newItem) {
            menuItems.push(newItem);
            displayMenuItems();
        }
    });

    deleteItemBtn.addEventListener("click", function () {
        const selectedItemIndex = menuList.selectedIndex;
        if (selectedItemIndex >= 0) {
            menuItems.splice(selectedItemIndex, 1);
            displayMenuItems();
        } else {
            alert("Please select a menu item to delete.");
        }
    });

    menuList.addEventListener("change", function () {
        deleteItemBtn.disabled = menuList.selectedIndex === -1;
    });

    function displayMenuItems() {
        menuList.innerHTML = "";
        menuItems.forEach((item, index) => {
            const option = document.createElement("option");
            option.textContent = item;
            menuList.appendChild(option);
        });
        deleteItemBtn.disabled = true;
    }
});
