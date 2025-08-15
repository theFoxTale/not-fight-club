const windowsNames = ["Main", "Character", "Settings", "Battle"];

let headerSpan, firstWindow, secondWindow;

document.addEventListener('DOMContentLoaded', () => {
    firstWindow = document.querySelector('.create-character');
    secondWindow = document.querySelector('.game-flow-container');

    const characterNameInput = document.getElementById('character-name');
    const createCharacterButton = document.querySelector('.create-character-button');

    createCharacterButton.addEventListener('click', () => {
        localStorage.setItem('nfcCharacterName', characterNameInput.value);
        firstWindow.classList.remove('visible-element');
        firstWindow.classList.add('hidden-element');
        secondWindow.classList.add('visible-element');
    });

    headerSpan = document.querySelector(".window-name-span");
    headerSpan.textContent = windowsNames[0];
});