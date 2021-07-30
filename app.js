const title = document.querySelector("h2");
const body = document.querySelector("body");
body.style.backgroundColor = "orange";
title.style.color = "white";
function handleResize() {
  const width = window.innerWidth;
  if (width > 900) {
    body.style.backgroundColor = "orange";
  } else if (width > 700) {
    body.style.backgroundColor = "green";
  } else {
    body.style.backgroundColor = "blue";
  }
}
window.addEventListener("resize", handleResize);
