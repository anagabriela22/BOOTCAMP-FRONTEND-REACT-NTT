import { currentPage, productosGlobales, renderPage } from "./mostrarProductos";

// camel case
export function FiltrarPorCategoria(categoria) {
  // un solo idioma
  const contenedor = document.querySelector("#productos");
  const pagination = document.querySelector(".pagination");

  // usemos constantes para valores fijos no su valor directamente
  if (categoria === "all") {
    renderPage(productosGlobales, contenedor, currentPage);
    pagination.style.display = "flex";
    ConCoincidencias(contenedor);
    return;
  }

  // un solo idioma
  const productosFiltrados = productosGlobales.filter(
    (producto) => producto.category === categoria
  );

  if (productosFiltrados.length > 0) {
    renderPage(productosFiltrados, contenedor, 1);
    pagination.style.display = "none";
    ConCoincidencias(contenedor);
  } else {
    SinCoincidencias(contenedor);
    pagination.style.display = "none";
  }
}

// mismo código de FiltrarPorBusqueda.js por lo que se podría tener una función reutilizable que solo haga esto y reciba parametros para modificar su contenido.
function SinCoincidencias(contenedor) {
  let mensaje = document.querySelector("#mensaje-sin-coincidencias");

  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.id = "mensaje-sin-coincidencias";
    mensaje.textContent = "No se encontraron productos en esta categoría.";
    mensaje.style.color = "red";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "20px";
    contenedor.parentElement.appendChild(mensaje);
  }
}

// igual código repetido
function ConCoincidencias(contenedor) {
  const mensaje = document.querySelector("#mensaje-sin-coincidencias");
  if (mensaje) {
    mensaje.remove();
  }
}
