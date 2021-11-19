function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
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

function PictureChangeGreen() {
  document.getElementById("ChangeColorPicture").src = "images/colors_green.jpg";
}

function PictureChangeGray() {
  document.getElementById("ChangeColorPicture").src = "images/colors_gray.jpg";
}

function PictureChangeWhite() {
  document.getElementById("ChangeColorPicture").src = "images/colors_white.jpg";
}

//
