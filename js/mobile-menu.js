(() => {
    const ref = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    ref.openMenuBtn.addEventListener("click", toggleModal);
    ref.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      ref.menu.classList.toggle("is-open");
    }
  })();