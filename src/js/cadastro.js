document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha').value;

        cadastrarUsuario(username, email, senha);
    });
});

function cadastrarUsuario(username, email, senha) {
    var cadastroForm = {
        username: username,
        email: email,
        senha: senha,
    };

    fetch('/api/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cadastroForm),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "index.html";
        } else {
            alert("Erro no cadastro. Verifique os dados e tente novamente.");
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar o usuário:', error);
    });
}
