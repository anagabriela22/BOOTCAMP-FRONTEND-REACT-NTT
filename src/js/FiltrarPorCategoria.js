import { monstrarMensajeSinCoincidencias, ocultarMensajeSinCoincidencias } from "../utils/MostrarMensajeCoincidencias";
import { paginaActual, productosGlobales, renderizarPagina } from "./MostrarProductos";

export function filtrarPorCategoria(categoria) {

  const categoriaTodos = "all"
  const contenedor = document.querySelector("#productos");
  const paginacion = document.querySelector(".paginacion");

  if (categoria === categoriaTodos) {
    renderizarPagina(productosGlobales, contenedor, paginaActual);
    paginacion.style.display = "flex";
    ocultarMensajeSinCoincidencias(contenedor);
    return;
  }

  const productosFiltrados = productosGlobales.filter(
    (producto) => producto.category === categoria
  );

  if (productosFiltrados.length > 0) {
    renderizarPagina(productosFiltrados, contenedor, 1);
    paginacion.style.display = "none";
    ocultarMensajeSinCoincidencias(contenedor);
  } else {
    monstrarMensajeSinCoincidencias(contenedor);
    paginacion.style.display = "none";
  }
}
