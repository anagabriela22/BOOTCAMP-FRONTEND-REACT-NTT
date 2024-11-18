import { productosGlobales, renderPage } from "./mostrarProductos";

export function FiltrarPorBusqueda(busqueda) {
  const contenedor = document.querySelector("#productos");
  const pagination = document.querySelector(".pagination");

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

function SinCoincidencias(contenedor) {
  let mensaje = document.querySelector("#mensaje-sin-coincidencias");

  // Crea el mensaje si no existe
  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.id = "mensaje-sin-coincidencias";
    mensaje.textContent = "No se encontraron productos.";
    mensaje.style.color = "red";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "20px";
    contenedor.parentElement.appendChild(mensaje);
  }

  Array.from(contenedor.children).forEach((producto) => {
    producto.style.display = "none";
  });
}

function ConCoincidencias(contenedor) {
  const mensaje = document.querySelector("#mensaje-sin-coincidencias");

  if (mensaje) {
    mensaje.remove();
  }

  Array.from(contenedor.children).forEach((producto) => {
    producto.style.display = "";
  });
}
