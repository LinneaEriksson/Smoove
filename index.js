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

// TESTING U_NDER HÄR
// Dots on car
const setDataTypeOnImage = document.querySelector(
  "section[name=Personalize] img"
);
if (window.innerWidth <= 1024) {
  setDataTypeOnImage.dataset.type = "mobile";
} else {
  setDataTypeOnImage.dataset.type = "desktop";
}
// Show correct image when in #personalize when dots are clicked.
const dots = document.querySelectorAll(".dot");
dots.forEach((dot) => {
  dot.addEventListener(touchEvent, (e) => {
    const color = e.target.getAttribute("id");
    const imageParent = document.querySelector(".personalize");
    const image = imageParent.getElementsByTagName("img")[0];
    const dataTypeDesktop = document.querySelector(
      ".personalize picture source"
    );
    const dataType = document.querySelector(".personalize picture img").dataset
      .type;
    //if (dataType === "mobile") {
    //image.src = `/images/mobile_colors_${color}.png`;
    //} else {
    //    dataTypeDesktop.srcset = `/images/colors_${color}.jpg`;
    image.src = `/images/colors_${color}.jpg`;
    // }
  });
});

function PictureChange() {
  document.getElementById("TheImage").src = "images/colors_black.jpg";
}
