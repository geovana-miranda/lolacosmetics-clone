const menuBtn = document.getElementById("menu_btn");
const menuMobile = document.getElementById("menu_mobile");
const menuBtnClose = document.getElementById("menu_btn_close");

menuBtn.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden")
})

menuBtnClose.addEventListener("click", () => {
    menuMobile.classList.toggle("hidden")
})

