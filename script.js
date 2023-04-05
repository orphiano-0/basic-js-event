let img = document.querySelector('img');
let name = document.querySelector('#name');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');


button1.addEventListener('click', () => {
    img.src = 'pichu.png';
})
button2.addEventListener('click', () => {
    img.src = 'pikachu.png';
})
button3.addEventListener('click', () => {
    img.src = 'raichu.png';
})
