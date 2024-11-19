export function ResponsiveDesign(): void {
  const buscador = document.getElementById("buscador");
  const containerMobil = document.getElementById("buscador-mobil-container");

  if (!buscador || !containerMobil) {
    console.error(
      'No se encontraron los elementos "buscador" o "buscador-mobil-container".'
    );
    return;
  }

  const isMobile = window.matchMedia("(max-width: 768px)");

  const handleResponsiveChange = () => {
    if (isMobile.matches) {
      if (containerMobil && !containerMobil.contains(buscador)) {
        containerMobil.appendChild(buscador);
      }
    } else {
      const originalContainer = document.getElementById(
        "buscador-pc-container"
      );
      if (originalContainer && !originalContainer.contains(buscador)) {
        originalContainer.appendChild(buscador);
      }
    }
  };

  handleResponsiveChange();
  isMobile.addEventListener("change", handleResponsiveChange);
}
