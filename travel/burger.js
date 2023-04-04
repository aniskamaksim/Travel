//burger handler
(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header_nav");
  const menuCloseItem = document.querySelector(".header_nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header_nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header_nav_active");
  });
  const accountItem = document.querySelector(".header_link1");
  accountItem.addEventListener("click", () => {
    menu.classList.add("header_nav_active");
    menu.classList.remove("header_nav_active");
  });
})();
