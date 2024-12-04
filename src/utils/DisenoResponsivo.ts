// no hay test
export function disenoResponsivo(): void {
  const buscador = document.getElementById("buscador");
  const contenedorMobil = document.getElementById("buscador-mobil-contenedor");
  const contenedorPc = document.getElementById("buscador-pc-contenedor");

  if (!buscador || !contenedorMobil) {
    console.error(
      'No se encontraron los elementos "buscador" o "buscador-mobil-contenedor".'
    );
    return;
  }

  const esTelefono = window.matchMedia("(max-width: 768px)");

  const manejador = () => {
    if (esTelefono.matches) {
      if (contenedorMobil && !contenedorMobil.contains(buscador)) {
        contenedorPc?.removeChild(buscador);
        contenedorMobil.appendChild(buscador);
      }
    } else {
      if (contenedorPc && !contenedorPc.querySelector("#buscador")) {
        contenedorMobil.removeChild(buscador);
        contenedorPc.appendChild(buscador);
      }
    }
  };

  manejador();
  esTelefono.addEventListener("change", manejador);
}
