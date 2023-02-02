'use strict';

//VARIABLES
const bodyEl = document.querySelector('.body');
const titleEl = document.querySelector('.title');
//Empty array to storage typed keys
const pressed = [];
//Word we are looking for
const secretCode = 'frida';

//EVENT LISTENERS
window.addEventListener('keyup', (ev) => {
    pressed.push(ev.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if(pressed.join('').toLowerCase().includes(secretCode.toLowerCase())){
        bodyEl.style.background = 'url(./images/frida.jpg)';
        bodyEl.style.backgroundSize = 'cover';
        bodyEl.style.backgroundPosition = 'center center';
        titleEl.innerHTML = '';
    }
})