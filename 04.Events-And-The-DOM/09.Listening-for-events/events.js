const headerImage = document.querySelector('#header-image');

function changeImage() {
    headerImage.style.width = '50%'
}

headerImage.onclick = changeImage;

headerImage.addEventListener('click', changeImage);
