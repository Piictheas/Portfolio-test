let currentImageIndex = 0;
let images = [];

function openLightbox(img) {
    if (window.innerWidth <= 700) {
        return;
    }
    images = Array.from(document.querySelectorAll('.box img, .box-long img, .box-long-long img, .gallery img, .gallery2 img'));
    currentImageIndex = images.indexOf(img);
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex].src;
}