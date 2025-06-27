const menuBtn = document.getElementById("menu_btn");
const menuMobile = document.getElementById("menu_mobile");
const menuBtnClose = document.getElementById("menu_btn_close");
const buttonsAcordeon = document.querySelectorAll("#button__acordeon");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});

menuBtnClose.addEventListener("click", () => {
  menuMobile.classList.toggle("hidden");
});

buttonsAcordeon.forEach((button) => {
  button.addEventListener("click", () => {

     if (window.matchMedia("(min-width: 1024px)").matches) return;

    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    content.classList.toggle("max-h-0");
    content.classList.toggle("max-h-54");
    content.classList.toggle("overflow-hidden");

    if (!content.classList.contains("max-h-0")) {
      setTimeout(() => (icon.textContent = "-"), 200);
    } else {
      setTimeout(() => (icon.textContent = "+"), 200);
    }
  });
});
