var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     captionText.innerHTML = dots[slideIndex - 1].alt;
// }

function goToCertificates() {

    const certificatesSection = document.getElementById("certificates");

    if (certificatesSection) {
        certificatesSection.scrollIntoView({ behavior: "smooth" });
    }
}

window.addEventListener('scroll', function() {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});