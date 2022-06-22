const colors =['green', 'red', 'purple', 'orange', 'yellow', 'blue', 'pink'];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', randomNumber);

function randomNumber(e){
    console.log('Clicked');
    const number = getRandomNumber();
    document.body.style.backgroundColor = colors[number];
    color.textContent = colors[number];
}

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}