const start = document.getElementById("startmenu");
const startmenu = document.getElementById("startmenuoptions");

// Toggle menu on div click
start.addEventListener("click", function () {
  startmenu.style.display =
    startmenu.style.display === "none" ? "block" : "none";
});

// Hide menu when clicked elsewhere on the page
document.addEventListener("click", function (event) {
  const isClickInsidestart = start.contains(event.target);
  const isClickInsidestartMenu = startmenu.contains(event.target);

  if (!isClickInsidestart && !isClickInsidestartMenu) {
    startmenu.style.display = "none";
  }
});
