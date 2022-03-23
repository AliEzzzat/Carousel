var imgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer");
var innerBox = document.getElementById("innerBox");
var closeBtn = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (event) {
    boxContainer.style.display = "flex";
    var imgSrc = event.target.getAttribute("src");
    currentIndex = imgs.indexOf(event.target);
    innerBox.style.backgroundImage = `url(${imgSrc})`;
  });
}

function closeElemnt() {
  boxContainer.style.display = "none";
}
closeBtn.addEventListener("click", closeElemnt);
next.addEventListener("click", nextElemnt);
prev.addEventListener("click", prevElemnt);
window.onclick = function(event) {
    if (event.target == boxContainer) {
        boxContainer.style.display = "none";
    }
  }
function nextElemnt() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = `url(${imgSrc})`;
}
function prevElemnt() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  var imgSrc = imgs[currentIndex].getAttribute("src");
  innerBox.style.backgroundImage = `url(${imgSrc})`;
}
document.addEventListener("keyup", function (event) {
  if (event.code == "ArrowRight") {
    nextElemnt();
  }
  if (event.code == "ArrowLeft") {
    prevElemnt();
  }
  if (event.code == "Escape") {
    closeElemnt();
  }

});

