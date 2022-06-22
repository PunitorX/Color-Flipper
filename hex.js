const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', randomHex);

function randomHex(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[getHexColor()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

function getHexColor(){
    return Math.floor(Math.random() * hex.length);
}