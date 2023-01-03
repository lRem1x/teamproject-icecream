
(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyDoc = document.querySelector("body");
  const menuLink = document.querySelector("[data-menu-link]");
  

  menuBtnRef.addEventListener("click", () => {

    menuBtnRef.classList.toggle("is-open");

    bodyDoc.classList.toggle("no-scroll");
    mobileMenuRef.classList.toggle("is-open");

  });

  menuLink.addEventListener('click', removeMenu);
  
  function removeMenu() {
    bodyDoc.classList.remove('no-scroll');
    mobileMenuRef.classList.remove("is-open");
    
    menuBtnRef.classList.remove("is-open");
  }

})();