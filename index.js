// navbar functions

function MyFunction() {
  let element = document.getElementById("TopBar");
  element.classList.toggle("Divground");
  var x = document.getElementById("MyLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Functions to change the color of the car. MOBILE-VERSION

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

// Functions to change the color of the car. DESKTOP-VERSION

function PictureChangeBlackDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_black.jpg";
}

function PictureChangeRedDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_red.jpg";
}

function PictureChangeOrangeDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_orange.jpg";
}

function PictureChangePurpleDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_purple.jpg";
}

function PictureChangeGrayDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_gray.jpg";
}

function PictureChangeWhiteDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_white.jpg";
}

// Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
}

// year

// const d = new Date();
// let year = d.getFullYear();
// document.getElementById("demo").innerHTML = year;

// test funktion
