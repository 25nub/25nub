const images = document.querySelectorAll('.image-container img');
let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

window.addEventListener('scroll', changeImage);
