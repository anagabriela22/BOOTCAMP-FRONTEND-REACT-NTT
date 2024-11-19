import { FiltrarPorBusqueda } from "./src/js/FiltrarPorBusqueda";
import { FiltrarPorCategoria } from "./src/js/FiltrarPorCategoria";
import { MostrarCategorias } from "./src/js/MostrarCatogorias";
import { MostrarProductos } from "./src/js/MostrarProductos";
import { ResponsiveDesign } from "./src/js/ResponseDesign";
import { ScrollSmooth } from "./src/js/ScrollSmooth";

document.addEventListener("DOMContentLoaded", async () => {
  ScrollSmooth();
  const productosContainer =
    document.querySelector<HTMLDivElement>("#productos");
  if (productosContainer) {
    await MostrarProductos(productosContainer);
  } else {
    console.error("El contenedor de productos no se encontro.");
  }

  const categoriasContainer =
    document.querySelector<HTMLSelectElement>("#categorias");
  if (categoriasContainer) {
    await MostrarCategorias(categoriasContainer);

    categoriasContainer.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      FiltrarPorCategoria(target.value);
    });
  } else {
    console.error("El contenedor de categorias no se encontro.");
  }

  const cajaBusqueda =
    document.querySelector<HTMLInputElement>("#caja-busqueda");
  if (cajaBusqueda) {
    cajaBusqueda.addEventListener("input", (e) => {
      const target = e.target as HTMLInputElement;
      FiltrarPorBusqueda(target.value);
    });
  } else {
    console.error("El campo de busqueda no se encontro.");
  }

  ResponsiveDesign();
});
