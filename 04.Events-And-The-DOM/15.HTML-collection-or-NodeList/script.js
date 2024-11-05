const static = document.querySelectorAll('.list-item');
const live = document.getElementsByClassName('list-item');
const active = document.querySelector('.active')

setTimeout(function () {
    active.classList.add('list-item')
    console.log(static);
    console.log(live);
}, 3000)


