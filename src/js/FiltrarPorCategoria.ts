import { currentPage, productosGlobales, renderPage } from "./MostrarProductos";

export function FiltrarPorCategoria(categoria: string): void {
  const contenedor = document.querySelector<HTMLElement>("#productos");
  const pagination = document.querySelector<HTMLElement>(".pagination");

  if (!contenedor || !pagination) {
    console.error(
      "No se encontro el contenedor de productos o los controles de paginacion."
    );
    return;
  }

  if (categoria === "all") {
    renderPage(productosGlobales, contenedor, currentPage);
    pagination.style.display = "flex";
    ConCoincidencias(contenedor);
    return;
  }

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

function SinCoincidencias(contenedor: HTMLElement): void {
  let mensaje = document.querySelector<HTMLParagraphElement>(
    "#mensaje-sin-coincidencias"
  );

  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.id = "mensaje-sin-coincidencias";
    mensaje.textContent = "No se encontraron productos en esta categoría.";
    mensaje.style.color = "red";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "20px";

    if (contenedor.parentElement) {
      contenedor.parentElement.appendChild(mensaje);
    } else {
      console.error(
        "No se encontró el contenedor padre para mostrar el mensaje."
      );
    }
  }
}

// el parametro no se usa
function ConCoincidencias(contenedor: HTMLElement): void {
  const mensaje = document.querySelector("#mensaje-sin-coincidencias");
  if (mensaje) {
    mensaje.remove();
  }
}
