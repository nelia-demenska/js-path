const add = document.querySelector('#add');
const cancel = document.querySelector('#cancel');
const output = document.querySelector('p');

function increase() {
    output.innerText = Number(output.innerText) + 1;
}
add.addEventListener('click', increase, {capture:true})

function stopListener() {
    add.removeEventListener('click', increase, {capture: true})
}
cancel.addEventListener('click', stopListener)