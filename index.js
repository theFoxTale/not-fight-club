const myNameStorageKey = 'nfcCharacterName';
const myImageStorageKey = 'nfcCharacterImageID';
const windowsNames = ["Main", "Character", "Settings", "Battle"];

let headerSpan, firstWindow, secondWindow, formContainers;
let currentNameSpan, newNameInput, editNameButton, saveNameButton;
let characterAvatar;
let avatarsSlider, arrowLeft, arrowRight, avatarContainer;

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
    return Number(localStorage.getItem(myImageStorageKey));
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
    switchToContainer(3);
}

function handleNameEdit() {
    setCurrentCharacterName(newNameInput.value);
    setNameInSettingsContainer();
    switchSettingsElements();
}

function switchActiveCharacterImage(direction) {
    let newAvatar;
    const currentAvatar = document.querySelector('.avatar-active');
    newAvatar = (direction > 0) ? currentAvatar.nextElementSibling : currentAvatar.previousElementSibling;

    if (newAvatar) {
        currentAvatar.classList.remove('avatar-active');
        newAvatar.classList.add('avatar-active');

        const avatarImage = newAvatar.querySelector('.avatar-image');
        const characterClass = Array.from(avatarImage.classList).find(className => className.startsWith('character-'));
        return Number(characterClass.split('-')[1]);
    }

    return 0;
}

function moveAvatarSlider() {
    const currentAvatarID = getCurrentCharacterImage();
    const shiftValue = -200 * (currentAvatarID - 2);
    avatarsSlider.style.transform = `translateX(${shiftValue}px)`;
}

function changeAvatar(direction) {
    const newAvatarID = switchActiveCharacterImage(direction);
    if (newAvatarID) {
        if (newAvatarID === 1 && direction < 0) arrowLeft.classList.add('not_active');
        if (newAvatarID === 2 && direction > 0) arrowLeft.classList.remove('not_active');

        if (newAvatarID === 8 && direction > 0) arrowRight.classList.add('not_active');
        if (newAvatarID === 7 && direction < 0) arrowRight.classList.remove('not_active');

        setCurrentCharacterImage(newAvatarID);
        moveAvatarSlider();
    }
}

function openChangeAvatarWindow() {
    moveAvatarSlider();
    switchToContainer(2);
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

    avatarContainer = document.querySelector('.change-avatar');
    avatarsSlider = document.querySelector('.avatars-slider');
    arrowLeft = document.querySelector('.arrow_left');
    arrowRight = document.querySelector('.arrow_right');
}

document.addEventListener('DOMContentLoaded', () => {
    getWindowElements();

    const character = getCurrentCharacterName();
    if (character) {
        switchWindows();
    }

    const createCharacterButton = document.querySelector('.create-character-button');
    createCharacterButton.addEventListener('click', createNewCharacter);

    document.querySelector('.home-icon').addEventListener('click', () => switchToContainer(0));
    document.querySelector('.character-icon').addEventListener('click', handleCharacterIconClick);

    document.querySelector('.settings-icon').addEventListener('click', handleSettingsIconClick);
    editNameButton.addEventListener('click', switchSettingsElements);
    saveNameButton.addEventListener('click', handleNameEdit);

    document.querySelector('.fight-button').addEventListener('click', () => switchToContainer(3));

    arrowLeft.addEventListener('click', () => changeAvatar(-1));
    arrowRight.addEventListener('click', () => changeAvatar(1));

    document.querySelector('.change-button').addEventListener('click', openChangeAvatarWindow);

    setActiveContainer(0);
});