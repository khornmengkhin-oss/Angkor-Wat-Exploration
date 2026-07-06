const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = navToggle
  ? document.getElementById(navToggle.getAttribute("aria-controls"))
  : null;

if (navToggle && primaryNavigation) {
  const closeNavigation = () => {
    navToggle.setAttribute("aria-expanded", "false");
    primaryNavigation.classList.remove("is-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNavigation.classList.toggle("is-open", !isOpen);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeNavigation();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeNavigation();
    }
  });
}
