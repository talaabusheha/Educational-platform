 const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const mark =menuBtn.querySelector('i')
  console.log(mark)
  menuBtn.onclick=()=>{
  sideMenu.classList.toggle("-translate-x-full");
  if (mark.classList.contains("fa-bars")) {
  mark.classList.replace("fa-bars", "fa-xmark");
} else {
  mark.classList.replace("fa-xmark", "fa-bars");
}
}
  