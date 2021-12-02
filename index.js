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

// forn

function FormFunction() {
  document.getElementById("MyForm").reset();
}

// Functions to change the color of the car. MOBILE-VERSION

function PictureChangeBlack() {
  document.getElementById("ChangeColorPicture").src = "images/colors_black.png";
}

function PictureChangeRed() {
  document.getElementById("ChangeColorPicture").src = "images/colors_red.png";
}

function PictureChangeOrange() {
  document.getElementById("ChangeColorPicture").src =
    "images/colors_orange.png";
}

function PictureChangePurple() {
  document.getElementById("ChangeColorPicture").src =
    "images/colors_purple.png";
}

function PictureChangeGray() {
  document.getElementById("ChangeColorPicture").src = "images/colors_gray.png";
}

function PictureChangeWhite() {
  document.getElementById("ChangeColorPicture").src = "images/colors_white.png";
}

// Functions to change the color of the car. DESKTOP-VERSION

function PictureChangeBlackDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_black.png";
}

function PictureChangeRedDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_red.png";
}

function PictureChangeOrangeDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_orange.png";
}

function PictureChangePurpleDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_purple.png";
}

function PictureChangeGrayDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_gray.png";
}

function PictureChangeWhiteDesktop() {
  document.getElementById("ChangeColorPictureDesktop").src =
    "images/colors_white.png";
}
