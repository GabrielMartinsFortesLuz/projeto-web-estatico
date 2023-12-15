document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var usernameOrEmail = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        authenticateUser(usernameOrEmail, password);
    });
});

function authenticateUser(usernameOrEmail, password) {
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            usernameOrEmail: usernameOrEmail,
            
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = "index.html";
        } else {
            alert("Nome de usuário/e-mail ou senha inválidos");
        }
    })
    .catch(error => {
        console.error('Erro ao autenticar o usuário:', error);
    });
}
