function myFunction() {
  const x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const gridItem = document.querySelector(".HoverPicture");

const imageOfMe = gridItem.querySelector(".HoverPicture img");
imageOfMe.src = "images/testbild.jpg";
