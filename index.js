function myFunction() {
  document.getElementById("MyDropdown").classList.toggle("Show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".DropBtn")) {
    var dropdowns = document.getElementsByClassName(".OpenMenu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("Show")) {
        openDropdown.classList.remove("Show");
      }
    }
  }
};

// Functions to change the color of the car.

function PictureChangeBlack() {
  document.getElementById("ChangeColorPicture").src = "images/colors_black.jpg";
}

function PictureChangeRed() {
  document.getElementById("ChangeColorPicture").src = "images/colors_red.jpg";
}

function PictureChangeOrange() {
  document.getElementById("ChangeColorPicture").src =
    "images/colors_orange.jpg";
}

function PictureChangePurple() {
  document.getElementById("ChangeColorPicture").src =
    "images/colors_purple.jpg";
}

function PictureChangeGray() {
  document.getElementById("ChangeColorPicture").src = "images/colors_gray.jpg";
}

function PictureChangeWhite() {
  document.getElementById("ChangeColorPicture").src = "images/colors_white.jpg";
}

// Slideshow

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

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// year

const d = new Date();
let year = d.getFullYear();
document.getElementById("demo").innerHTML = year;
