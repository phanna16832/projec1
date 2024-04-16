document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

    // Dummy user data (you can replace it with JSON or connect to a backend)
    var users = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' }
    ];

    // Check if the provided username and password match any user in the list
    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        // Redirect to the index page after successful login
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
});