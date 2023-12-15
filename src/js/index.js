    const showPopupButton = document.getElementById("showPopup");
    const closePopupButton = document.getElementById("closePopup");
    const confirmButton = document.getElementById("confirmButton");
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");

    if (showPopupButton) {
        showPopupButton.addEventListener("click", function () {
            overlay.style.display = "block";
            popup.style.display = "block";
        });
    }
    
    if (closePopupButton) {
        closePopupButton.addEventListener("click", function () {
            overlay.style.display = "none";
            popup.style.display = "none";
    
            const lobbyNameInput = document.getElementById("lobbyName");
            if (lobbyNameInput) {
                lobbyNameInput.value = "";
            }
        });
    }
    
    if (confirmButton) {
        confirmButton.addEventListener("click", function () {
            const lobbyNameInput = document.getElementById("lobbyName");
            const lobbyName = lobbyNameInput ? lobbyNameInput.value.trim() : '';
    
            if (lobbyName !== "") {
                window.location.href = `lobby.html?room=${lobbyName}`;
            } else {
                alert("Por favor, insira um nome de sala válido.");
            }
        });
    }

    // Modificar a função rollDice para aceitar o número de lados como parâmetro
    function rollDice(sides) {
    // Lógica para gerar um número aleatório entre 1 e 'sides'
    const result = Math.floor(Math.random() * sides) + 1;

    // Atualizar o conteúdo do elemento com o ID 'diceRoll' com o resultado
    const diceRollElement = document.getElementById("diceRoll");
    if (diceRollElement) {
        diceRollElement.textContent = result;
    }
    }

    const rollButton = document.getElementById("btnRoll");
    if (rollButton) {
        rollButton.addEventListener("click", function() {
        // Obter o número de lados da opção selecionada
        const selectedOption = document.querySelector(".diceOption.active");
        const numSides = selectedOption ? parseInt(selectedOption.dataset.sides) : 6;

        // Chamada da função rollDice com o número de lados correto
        rollDice(numSides);
        });
    }

    // Adicione uma classe 'active' à opção clicada
    function rollSpecificDice(sides) {
    // Remover 'active' de todas as opções
    const options = document.querySelectorAll(".diceOption");
    options.forEach(option => option.classList.remove("active"));

    // Adicionar 'active' à opção clicada
    const clickedOption = document.querySelector(`.diceOption[data-sides="${sides}"]`);
    if (clickedOption) {
        clickedOption.classList.add("active");
    }
    }

    // Nova função para rolar um dado com um número específico de lados
    function rollSpecificDice(sides) {
    // Chamada da função rollDice com o número específico de lados
    rollDice(sides);
    }

    function changeButtonImage(buttonId) {
        const input = document.getElementById(`${buttonId}Image`);
        const button = document.getElementById(buttonId);
    
        if (input.files && input.files[0]) {
            const reader = new FileReader();
    
            reader.onload = function (e) {
                button.style.backgroundImage = `url(${e.target.result})`;
            };
    
            reader.readAsDataURL(input.files[0]);
        }
    }
    