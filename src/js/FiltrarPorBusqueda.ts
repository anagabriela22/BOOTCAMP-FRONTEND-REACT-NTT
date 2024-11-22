import { productosGlobales, renderizarPagina } from "./MostrarProductos";
import { monstrarMensajeSinCoincidencias, ocultarMensajeSinCoincidencias } from "../utils/MostrarMensajeCoincidencia";

export function filtrarPorBusqueda(busqueda: string): void {
  const contenedor = document.querySelector<HTMLElement>("#productos");
  const paginacion = document.querySelector<HTMLElement>(".paginacion");

  if (!contenedor || !paginacion) {
    console.error(
      "No se encontro el contenedor de productos o los controles de paginacion."
    );
    return;
  }

  const filtro = busqueda.toLowerCase();
  const ocultarProductos = true

  if (!filtro.trim()) {
    let paginaUno = 1
    renderizarPagina(productosGlobales, contenedor, paginaUno);
    paginacion.style.display = "";
    monstrarMensajeSinCoincidencias(contenedor, ocultarProductos);
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
    let paginaUno = 1
    renderizarPagina(productosFiltrados, contenedor, 1);
    paginacion.style.display = "none";
    ocultarMensajeSinCoincidencias(contenedor, ocultarProductos);
  } else {
    monstrarMensajeSinCoincidencias(contenedor, ocultarProductos);
    paginacion.style.display = "none";
  }
}
