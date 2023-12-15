
function createDraggableObject(button, buttonId) {
    const object = document.createElement('div');
    object.classList.add('draggable');
    object.setAttribute('draggable', true);

    object.style.left = `${button.offsetLeft}px`;
    object.style.top = `${button.offsetTop}px`;

    // Obtenha a imagem de fundo do botão com base no ID
    const backgroundImage = window.getComputedStyle(button, null).getPropertyValue('background-image');
    object.style.backgroundImage = backgroundImage;

    document.body.appendChild(object);

    makeDraggable(object);
}

function makeDraggable(element) {
    let isDragging = false;

    element.addEventListener('mousedown', (e) => {
        isDragging = true;

        const offsetX = e.clientX - element.getBoundingClientRect().left;
        const offsetY = e.clientY - element.getBoundingClientRect().top;

        document.addEventListener('mousemove', moveElement);

        function moveElement(e) {
            if (isDragging) {
                element.style.left = `${e.clientX - offsetX}px`;
                element.style.top = `${e.clientY - offsetY}px`;
            }
        }

        document.addEventListener('mouseup', () => {
            isDragging = false;
            document.removeEventListener('mousemove', moveElement);
        });
    });

    element.addEventListener('dragstart', () => {
        element.classList.add('dragging');
    });

    element.addEventListener('dragend', () => {
        element.classList.remove('dragging');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const object = document.querySelectorAll('.draggable');
    object.forEach(makeDraggable);
});

function toolbarConfigPopup() {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.toolbarConfigPopup');
    const buttonList = document.querySelector('.popup.toolbarConfigPopup ul');

    // Limpe a lista antes de adicionar os novos elementos
    buttonList.innerHTML = '';

    // Adicione elementos à lista com input de imagem para cada botão
    for (let i = 1; i <= 9; i++) {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');

        label.setAttribute('for', `tokenButton${i}Image`);
        label.textContent = `Botão ${i}:`;

        input.setAttribute('type', 'file');
        input.setAttribute('id', `tokenButton${i}Image`);
        input.setAttribute('accept', 'image/jpeg, image/png');
        input.setAttribute('onchange', `changeButtonImage('tokenButton${i}')`);

        li.appendChild(label);
        li.appendChild(input);

        buttonList.appendChild(li);
    }

    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function dicePopup() {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector('.dicePopup');

    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopupWindow(popupClass) {
    const overlay = document.querySelector('.overlay');
    const popup = document.querySelector(`.${popupClass}`);

    overlay.style.display = 'none';
    popup.style.display = 'none';
}