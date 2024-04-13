// Dummy user data (you can replace it with JSON or connect to a backend)
let users = [];

document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  
  const user = users.find(user => user.username === username && user.password === password);
  
  if (user) {
    alert('Login successful');
  } else {
    alert('Invalid username or password');
    // No need to redirect here
  }
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  
  // Check if the username is already taken
  if (users.some(user => user.username === username)) {
    alert('Username is already taken');
    return;
  }
  
  users.push({ username, password });
  alert('Sign up successful');
});
