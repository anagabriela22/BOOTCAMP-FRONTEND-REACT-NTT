export function disenoResponsivo() {
  const buscador = document.getElementById("buscador");
  // containerMobile
  const contenedorMobil = document.getElementById("buscador-mobil-contenedor");

  const esTelefono = window.matchMedia("(max-width: 768px)");

  const manejador = () => {
    if (esTelefono.matches) {
      if (contenedorMobil && !contenedorMobil.contains(buscador)) {
        contenedorMobil.appendChild(buscador);
      }
    } else {
      const contenedorPc = document.getElementById(
        "buscador-mobil-contenedor"
      );
      if (contenedorPc && !contenedorPc.contains(buscador)) {
        contenedorPc.appendChild(buscador);
      }
    }
  };

  manejador();
  esTelefono.addEventListener("change", manejador);
}
