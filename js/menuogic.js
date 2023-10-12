window.addEventListener('scroll', function () {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});