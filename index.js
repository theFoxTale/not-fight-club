const myNameStorageKey = 'nfcCharacterName';
const myImageStorageKey = 'nfcCharacterImageID';
const windowsNames = ["Main", "Character", "Settings", "Battle"];

let headerSpan, firstWindow, secondWindow, formContainers;
let currentNameSpan, newNameInput, editNameButton, saveNameButton;
let characterAvatar;

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

function createNewCharacter() {
    const characterNameInput = document.getElementById('character-name');
    setCurrentCharacterName(characterNameInput.value);

    const randomAvatarID = randomInteger(1, 8);
    setCurrentCharacterImage(randomAvatarID);

    switchWindows();
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
    localStorage.setItem(myNameStorageKey, newName);
}

function setCurrentCharacterImage(imageID) {
    localStorage.setItem(myImageStorageKey, imageID);
}

function getCurrentCharacterName() {
    return localStorage.getItem(myNameStorageKey);
}

function getCurrentCharacterImage() {
    return localStorage.getItem(myImageStorageKey);
}

function setNameInSettingsContainer() {
    const currentName = getCurrentCharacterName();
    currentNameSpan.textContent = currentName;
    newNameInput.value = currentName;
}

function setNameInCharacterContainer() {
    const nameElement = document.querySelector('.my-character-name');
    nameElement.textContent = getCurrentCharacterName();
}

function switchSettingsElements() {
    currentNameSpan.classList.toggle('hidden-element');
    newNameInput.classList.toggle('hidden-element');
    editNameButton.classList.toggle('hidden-element');
    saveNameButton.classList.toggle('hidden-element');
}

function drawCharacterPicture(idx) {
    characterAvatar.classList.forEach(item => {
        if (item !== 'character-image-container') {
            characterAvatar.classList.remove(item);
        }
    });
    characterAvatar.classList.add('character-' + idx);
}

function handleCharacterIconClick() {
    setNameInCharacterContainer();

    const currentPictureID = getCurrentCharacterImage();
    drawCharacterPicture(currentPictureID);

    switchToContainer(1);
}

function handleSettingsIconClick() {
    setNameInSettingsContainer();
    switchToContainer(2);
}

function handleNameEdit() {
    setCurrentCharacterName(newNameInput.value);
    setNameInSettingsContainer();
    switchSettingsElements();
}

function getWindowElements() {
    firstWindow = document.querySelector('.create-character');
    secondWindow = document.querySelector('.game-flow-container');

    headerSpan = document.querySelector(".window-name-span");
    formContainers = document.querySelectorAll('.my-containers');

    characterAvatar = document.querySelector('.character-image-container');

    currentNameSpan = document.querySelector('.current-name');
    newNameInput = document.getElementById('new-character-name');
    editNameButton = document.querySelector('.edit-button');
    saveNameButton = document.querySelector('.save-button');
}

document.addEventListener('DOMContentLoaded', () => {
    getWindowElements();

    const createCharacterButton = document.querySelector('.create-character-button');
    createCharacterButton.addEventListener('click', createNewCharacter);

    document.querySelector('.home-icon').addEventListener('click', () => switchToContainer(0));
    document.querySelector('.character-icon').addEventListener('click', handleCharacterIconClick);

    document.querySelector('.settings-icon').addEventListener('click', handleSettingsIconClick);
    editNameButton.addEventListener('click', switchSettingsElements);
    saveNameButton.addEventListener('click', handleNameEdit);

    document.querySelector('.fight-button').addEventListener('click', () => switchToContainer(3));

    setActiveContainer(0);
});