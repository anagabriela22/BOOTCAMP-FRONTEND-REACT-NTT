export function funcionalidadScroll(): void {
  const toTopButton = document.getElementById("ui-to-top");
  if (!toTopButton) {
    console.error('No se encontro el botón con id "ui-to-top".');
    return;
  }

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

  const firstNavBarBox = document.querySelector<HTMLElement>(
    ".seccionNavBarPage__box--first"
  );
  const navBarContainer =
    document.querySelector<HTMLElement>(".seccionNavBarPage");

  if (!firstNavBarBox || !navBarContainer) {
    console.error(
      'No se encontraron los elementos con las clases ".seccionNavBarPage__box--first" o ".seccionNavBarPage".'
    );
    return;
  }

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
