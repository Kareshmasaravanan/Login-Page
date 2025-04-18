// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get form and input elements
    const form = document.querySelector("form");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");

    // Add a submit event listener to the form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation
        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        // Example: Check hardcoded username and password (for demo purposes only)
        if (username === "admin" && password === "1234") {
            alert("Login successful!");
            // Redirect to another page or do something
            window.location.href = "/welcome.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});