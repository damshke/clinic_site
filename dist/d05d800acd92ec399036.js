var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var n,l=document.getElementsByClassName("slide");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),n=0;n<l.length;n++)l[n].style.display="none";l[slideIndex-1].style.display="block"}function goToCertificates(){const e=document.getElementById("certificates");e&&e.scrollIntoView({behavior:"smooth"})}function openImage(e){e.nextElementSibling.style.display="block"}function closeImage(e){e.parentElement.style.display="none"}window.addEventListener("load",(()=>{showSlides(slideIndex)})),window.addEventListener("scroll",(function(){const e=document.getElementById("site-header");window.scrollY>50?e.classList.add("scroll"):e.classList.remove("scroll")}));