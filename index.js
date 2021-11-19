function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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
    if (dataType === "mobile") {
      image.src = `/images/mobile_colors_${color}.png`;
    } else {
      dataTypeDesktop.srcset = `/images/colors_${color}.jpg`;
      image.src = `/images/colors_${color}.jpg`;
    }
  });
});
