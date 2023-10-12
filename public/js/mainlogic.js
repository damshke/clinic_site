var slideIndex = 1;
window.addEventListener('load', () => {
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function goToCertificates() {

    const certificatesSection = document.getElementById("certificates");

    if (certificatesSection) {
        certificatesSection.scrollIntoView({ behavior: "smooth" });
    }
}

window.addEventListener('scroll', function () {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

function openImage(clickedImage) {
    var overlay = clickedImage.nextElementSibling;
    overlay.style.display = "block";
}

function closeImage(clickedCloseButton) {
    var overlay = clickedCloseButton.parentElement;
    overlay.style.display = "none";
}