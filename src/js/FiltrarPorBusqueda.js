import { monstrarMensajeSinCoincidencias, ocultarMensajeSinCoincidencias } from "../utils/MostrarMensajeCoincidencias";
import { paginaActual, productosGlobales, renderizarPagina } from "./MostrarProductos";

export function filtrarPorBusqueda(busqueda) {
  const contenedor = document.querySelector("#productos");
  const paginacion = document.querySelector(".paginacion");

  const filtro = busqueda.toLowerCase();
  const ocultarProductos = true

  if (!filtro.trim()) {
    renderizarPagina(productosGlobales, contenedor, paginaActual);
    paginacion.style.display = "";
    ocultarMensajeSinCoincidencias(contenedor, ocultarProductos);
    return;
  }

  const productosFiltrados = productosGlobales.filter((producto) => {
    const titulo = producto.title.toLowerCase();
    const descripcion = producto.description?.toLowerCase() || "";
    const categoria = producto.category.toLowerCase();

    return (
      titulo.includes(filtro) ||
      descripcion.includes(filtro) ||
      categoria.includes(filtro)
    );
  });

  if (productosFiltrados.length > 0) {
    renderizarPagina(productosFiltrados, contenedor, 1);
    paginacion.style.display = "none";
    ocultarMensajeSinCoincidencias(contenedor, ocultarProductos);
  } else {
    monstrarMensajeSinCoincidencias(contenedor, ocultarProductos);
    paginacion.style.display = "none";
  }
}
