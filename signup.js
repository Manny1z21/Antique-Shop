function registerUser (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageDiv = document.getElementById('message');

    if (password !== confirmPassword) {
        messageDiv.textContent = 'Passwords do not match!';
        messageDiv.className = 'message error';
        messageDiv.style.display = 'block';
        return;
    }

    const mockResponse = {
        success: true, 
    };

    setTimeout(() => {
        if (mockResponse.success) {
            messageDiv.textContent = 'Account created successfully!';
            messageDiv.className = 'message success';
        } else {
            messageDiv.textContent = 'Error creating account.';
            messageDiv.className = 'message error';
        }
        messageDiv.style.display = 'block';
    }, 1000);
}

    fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            messageDiv.textContent = 'Account created successfully!';
            messageDiv.className = 'message success';
        } else {
            messageDiv.textContent = 'Error creating account.';
            messageDiv.className = 'message error';
        }
        messageDiv.style.display = 'block';
    })
    .catch(error => {
        messageDiv.textContent = 'Error creating account.';
        messageDiv.className = 'message error';
        messageDiv.style.display = 'block';
        console.error('Error:', error);
    });
