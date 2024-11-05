const headerImage = document.querySelector('#headerImage');
function changeImage() {
  headerImage.setAttribute('src', 'burger2.jpg');
}
headerImage.addEventListener('click', changeImage)

function addToFavourites(e) {
  e.stopPropagation()
  alert(`${e.target.parentNode.children[2].innerText}`)
}

const addButtons = document.querySelectorAll(".add");
addButtons.forEach(function(button) {
  button.addEventListener('click', addToFavourites, {once: true})
})

function redirect(e) {
  alert('recipe clicked')
}

const recipeTitles = document.querySelectorAll("article ");
recipeTitles.forEach(function(title) {
  title.addEventListener('click', redirect)
})

function handleFormSubmit(e) {
  e.preventDefault()
  console.log(userName.value);
  if (userName.value === '') {
    alert('Please enter your name');
    return;
  }
  userName.value = '';
  userEmail.value = '';
  // send to server
}

const form = document.querySelector('form')
const userName = document.querySelector('#name')
const userEmail = document.querySelector('#email')
form.addEventListener('submit', handleFormSubmit)