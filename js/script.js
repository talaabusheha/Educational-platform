

  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll(".menu-link");

function toggleMenu() {
  sideMenu.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");

  const isOpen = !sideMenu.classList.contains("-translate-x-full");
  menuBtn.textContent = isOpen ? "✕" : "☰";
}

  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  links.forEach(link =>
    link.addEventListener("click", toggleMenu)
  );
//   const menuBtn = document.getElementById("menuBtn");
//   const sideMenu = document.getElementById("sideMenu");
//   menuBtn.onclick=()=>{
//   sideMenu.classList.toggle("-translate-x-full");
//    overlay.classList.toggle("hidden");
// }
  