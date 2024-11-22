import { filtrarPorBusqueda } from "./src/js/FiltrarPorBusqueda";
import { filtrarPorCategoria } from "./src/js/FiltrarPorCategoria";
import { mostrarCategorias } from "./src/js/MostrarCatogorias";
import { mostrarProductos } from "./src/js/MostrarProductos";
import { disenoResponsivo } from "./src/js/DisenoResponsivo";
import { ScrollSmooth } from "./src/js/ScrollSmooth";

document.addEventListener("DOMContentLoaded", async () => {
  ScrollSmooth();
  const contenedorProductos =
    document.querySelector<HTMLDivElement>("#productos");
  if (contenedorProductos) {
    await mostrarProductos(contenedorProductos);
  } else {
    console.error("El contenedor de productos no se encontro.");
  }

  const contenedorCategorias =
    document.querySelector<HTMLSelectElement>("#categorias");
  if (contenedorCategorias) {
    await mostrarCategorias(contenedorCategorias);

    contenedorCategorias.addEventListener("change", (e) => {
      const destino = e.target as HTMLSelectElement;
      filtrarPorCategoria(destino.value);
    });
  } else {
    console.error("El contenedor de categorias no se encontro.");
  }

  const cajaBusqueda =
    document.querySelector<HTMLInputElement>("#caja-busqueda");
  if (cajaBusqueda) {
    cajaBusqueda.addEventListener("input", (e) => {
      const destino = e.target as HTMLInputElement;
      filtrarPorBusqueda(destino.value);
    });
  } else {
    console.error("El campo de busqueda no se encontro.");
  }

  disenoResponsivo();
});
