import { productosGlobales, renderPage } from "./MostrarProductos";

export function FiltrarPorBusqueda(busqueda: string): void {
  // otra forma de tipar es usando los genericos que exponen los query selector
  const contenedor = document.querySelector<HTMLElement>("#productos");
  const pagination = document.querySelector<HTMLElement>(".pagination");

  if (!contenedor || !pagination) {
    console.error(
      "No se encontro el contenedor de productos o los controles de paginacion."
    );
    return;
  }

  // hay tipado implicito en este caso ya que toLowerCase solo retonar'a un stirng
  const filtro = busqueda.toLowerCase();

  if (!filtro.trim()) {
    renderPage(productosGlobales, contenedor, 1);
    pagination.style.display = "";
    ConCoincidencias(contenedor);
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

  // Crea el mensaje si no existe
  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.id = "mensaje-sin-coincidencias";
    mensaje.textContent = "No se encontraron productos.";
    mensaje.style.color = "red";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "20px";

    if (contenedor.parentElement) {
      contenedor.parentElement.appendChild(mensaje);
    } else {
      console.error(
        "No se encontro el contenedor padre para mostrar el mensaje."
      );
    }
  }

  Array.from(contenedor.children).forEach((producto) => {
    (producto as HTMLElement).style.display = "none";
  });
}

function ConCoincidencias(contenedor: HTMLElement): void {
  const mensaje = document.querySelector("#mensaje-sin-coincidencias");

  if (mensaje) {
    mensaje.remove();
  }

  Array.from(contenedor.children).forEach((producto) => {
    (producto as HTMLElement).style.display = "";
  });
}
