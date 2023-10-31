const trigger = document.getElementById("extras");
const menu = document.getElementById("extrasmenu");

// Toggle menu on div click
trigger.addEventListener("click", function () {
  menu.style.display = menu.style.display === "none" ? "block" : "none";
});

// Hide menu when clicked elsewhere on the page
document.addEventListener("click", function (event) {
  const isClickInsideTrigger = trigger.contains(event.target);
  const isClickInsideMenu = menu.contains(event.target);

  if (!isClickInsideTrigger && !isClickInsideMenu) {
    menu.style.display = "none";
  }
});
