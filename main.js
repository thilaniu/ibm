javascript
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can perform validation and registration logic here
    // For simplicity, let's just display the input values
    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);
});

