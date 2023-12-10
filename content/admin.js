document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

var enteredUsername = document.getElementById('username').value;
var enteredPassword = document.getElementById('password').value;

var adminUsername = 'admin';
var adminPassword = 'admin123';

if (enteredUsername === adminUsername && enteredPassword === adminPassword) {
    // Log successful login
    console.log('Login successful as admin!');

    // Redirect to a new HTML page after successful login
    window.location.href = 'dashboard.html?username=' + enteredUsername;
} else {
    console.log('Invalid username or password. Please try again.');
}
});

// Get the username from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the welcome message with the username
document.getElementById('usernameDisplay').innerText = `Welcome, ${username}!`;