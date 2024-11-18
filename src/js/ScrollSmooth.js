export function ScrollSmooth() {
  // Obtener el botón
  const toTopButton = document.getElementById("ui-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 2) {
      toTopButton.classList.add("active");
    } else {
      toTopButton.classList.remove("active");
    }
  });
  toTopButton.addEventListener("click", (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  const firstNavBarBox = document.querySelector(
    ".seccionNavBarPage__box--first"
  );
  const navBarContainer = document.querySelector(".seccionNavBarPage");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      firstNavBarBox.classList.add("active--none");
      navBarContainer.classList.add("active");
    } else {
      firstNavBarBox.classList.remove("active--none");
      navBarContainer.classList.remove("active");
    }
  });
}
