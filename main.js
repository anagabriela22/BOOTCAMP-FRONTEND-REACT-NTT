import { filtrarPorBusqueda } from "./src/js/FiltrarPorBusqueda";
import { filtrarPorCategoria } from "./src/js/FiltrarPorCategoria";
import { mostrarCategorias } from "./src/js/MostrarCatogorias";
import { mostrarProductos } from "./src/js/MostrarProductos";
import { disenoResponsivo } from "./src/js/DisenoResponsivo";
import { ScrollSmooth } from "./src/js/ScrollSmooth";

document.addEventListener("DOMContentLoaded", async () => {
  ScrollSmooth();
  await mostrarProductos(document.querySelector("#productos"));
  await mostrarCategorias(document.querySelector("#categorias"));

  document.querySelector("#categorias").addEventListener("change", (e) => {
    filtrarPorCategoria(e.target.value);
  });

  document.querySelector("#caja-busqueda").addEventListener("input", (e) => {
    filtrarPorBusqueda(e.target.value);
  });

  disenoResponsivo();
});
