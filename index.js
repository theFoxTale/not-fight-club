const myStorageKey = 'nfcCharacterName';
const windowsNames = ["Main", "Character", "Settings", "Battle"];

let headerSpan, firstWindow, secondWindow, formContainers;
let currentNameSpan, newNameInput, editNameButton, saveNameButton;

function createNewCharacter() {
    const characterNameInput = document.getElementById('character-name');
    setCurrentCharacterName(characterNameInput.value);
}

function switchWindows() {
    firstWindow.classList.remove('visible-element');
    firstWindow.classList.add('hidden-element');
    secondWindow.classList.add('visible-element');
}

function hideAllContainers() {
    formContainers.forEach(item => {
        if (!item.classList.contains('hidden-element')) {
            item.classList.add('hidden-element');
        }
    });
}

function setActiveContainer(index) {
    headerSpan.textContent = windowsNames[index];
    formContainers[index].classList.remove('hidden-element');
}

function switchToContainer(idx) {
    hideAllContainers();
    setActiveContainer(idx);
}

function setCurrentCharacterName(newName) {
    localStorage.setItem(myStorageKey, newName);
}

function getCurrentCharacterName() {
    return localStorage.getItem(myStorageKey);
}

function setNameInSettingsContainer() {
    const currentName = getCurrentCharacterName();
    currentNameSpan.textContent = currentName;
    newNameInput.value = currentName;
}

function switchSettingsElements() {
    currentNameSpan.classList.toggle('hidden-element');
    newNameInput.classList.toggle('hidden-element');
    editNameButton.classList.toggle('hidden-element');
    saveNameButton.classList.toggle('hidden-element');
}

function getWindowElements() {
    firstWindow = document.querySelector('.create-character');
    secondWindow = document.querySelector('.game-flow-container');

    headerSpan = document.querySelector(".window-name-span");
    formContainers = document.querySelectorAll('.my-containers');

    currentNameSpan = document.querySelector('.current-name');
    newNameInput = document.getElementById('new-character-name');
    editNameButton = document.querySelector('.edit-button');
    saveNameButton = document.querySelector('.save-button');
}

document.addEventListener('DOMContentLoaded', () => {
    getWindowElements();

    const createCharacterButton = document.querySelector('.create-character-button');
    createCharacterButton.addEventListener('click', () => {
        createNewCharacter();
        switchWindows();
    });

    document.querySelector('.home-icon').addEventListener('click', () => switchToContainer(0));
    document.querySelector('.character-icon').addEventListener('click', () => switchToContainer(1));

    document.querySelector('.settings-icon').addEventListener('click', () => {
        setNameInSettingsContainer();
        switchToContainer(2);
    });
    editNameButton.addEventListener('click', () => switchSettingsElements());
    saveNameButton.addEventListener('click', () => {
        setCurrentCharacterName(newNameInput.value);
        setNameInSettingsContainer();
        switchSettingsElements();
    });

    document.querySelector('.fight-button').addEventListener('click', () => switchToContainer(3));

    setActiveContainer(0);
});