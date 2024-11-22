import { paginaActual, productosGlobales, renderizarPagina } from "./MostrarProductos";
import { monstrarMensajeSinCoincidencias, ocultarMensajeSinCoincidencias } from "../utils/MostrarMensajeCoincidencia";

export function filtrarPorCategoria(categoria: string): void {
  const contenedor = document.querySelector<HTMLElement>("#productos");
  const paginacion = document.querySelector<HTMLElement>(".paginacion");

  if (!contenedor || !paginacion) {
    console.error(
      "No se encontro el contenedor de productos o los controles de paginacion."
    );
    return;
  }
  const categoriaTodos = "all"
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
    let paginaUno = 1
    renderizarPagina(productosFiltrados, contenedor, paginaUno);
    paginacion.style.display = "none";
    ocultarMensajeSinCoincidencias(contenedor);
  } else {
    monstrarMensajeSinCoincidencias(contenedor);
    paginacion.style.display = "none";
  }
}
