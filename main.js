// eliminar código no usado
/*
import { setupCounter } from './counter.js'
document.querySelector('#app').innerHTML = `  
`
setupCounter(document.querySelector('#counter'))

*/

import { FiltrarPorBusqueda } from "./src/js/FiltrarPorBusqueda";
import { FiltrarPorCategoria } from "./src/js/FiltrarPorCategoria";
import { MostrarCategorias } from "./src/js/MostrarCatogorias";
import { MostrarProductos } from "./src/js/MostrarProductos";
import { ResponsiveDesign } from "./src/js/ResponseDesign";
import { ScrollSmooth } from "./src/js/ScrollSmooth";

document.addEventListener("DOMContentLoaded", async () => {
  ScrollSmooth();
  await MostrarProductos(document.querySelector("#productos"));
  await MostrarCategorias(document.querySelector("#categorias"));

  document.querySelector("#categorias").addEventListener("change", (e) => {
    FiltrarPorCategoria(e.target.value);
  });

  document.querySelector("#caja-busqueda").addEventListener("input", (e) => {
    FiltrarPorBusqueda(e.target.value);
  });

  ResponsiveDesign();
});
