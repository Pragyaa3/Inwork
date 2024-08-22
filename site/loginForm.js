document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const apiUrl = `https://kt3c2tpp7g.execute-api.ap-south-1.amazonaws.com/test/resources?company_id=INVYU1&email=${email}&password=${password}&role=${role}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to respective dashboard based on role
                if (role === 'admin') {
                    window.location.href = 'adminDashboard.html#profile';
                } else {
                    window.location.href = 'clientDashboard.html#profile';
                }
            } else {
                document.getElementById('login-response').innerText = data.message;
            }
        })
        .catch(error => console.error('Error logging in:', error));
});
