const ArrowRight = document.getElementById("arrow-right");
const ArrowLeft = document.getElementById("arrow-left");
const SlideContainer = document.querySelector(".slideshow-container");
const Content = document.querySelectorAll(".content");

ArrowRight.addEventListener("click", () => {
  Content.forEach((content) => {
    console.log(content);
    removeActiveClasses();
    content.classList.add("active");
  });
});

function removeActiveClasses() {
  Content.forEach((content) => {
    content.classList.remove("active");
  });
}
