document.addEventListener('DOMContentLoaded', () => {
    const characterNameInput = document.getElementById('character-name');
    const createCharacterButton = document.querySelector('.create-character-button');


    createCharacterButton.addEventListener('click', () => {
        localStorage.setItem('nfcCharacterName', characterNameInput.value);
    });
});