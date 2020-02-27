document.getElementById("heading").innerHTML =
  localStorage["title"] || "Just write anything ...";
document.getElementById("content").innerHTML =
  localStorage["text"] || "This text is automatically saved every second :) ";

const invertBtn = document.getElementById("invert");
setInterval(function() {
  localStorage["title"] = document.getElementById("heading").innerHTML;
  localStorage["text"] = document.getElementById("content").innerHTML;
}, 1000);

invertBtn.addEventListener("click", () => {
  document.body.classList.toggle("color");
  invertBtn.classList.toggle("colorBtn");
  //   document.body.style.backgroundColor = "rgb(48, 48, 48)";
  //   document.body.style.color = "whitesmoke";
});
