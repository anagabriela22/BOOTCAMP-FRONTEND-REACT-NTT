import { productosGlobales, renderPage } from "./mostrarProductos";

// camel case
export function FiltrarPorBusqueda(busqueda) {
  const contenedor = document.querySelector("#productos");
  // no mezclemos 2 idiomas, y como sugerencia que sea inglés ya que muchos proyectos de software lo hacen en ese idioma.
  const pagination = document.querySelector(".pagination");

  const filtro = busqueda.toLowerCase();

  if (!filtro.trim()) {
    // no usemos números mágicos, usemos constantes que definan lo que hacen
    renderPage(productosGlobales, contenedor, 1);
    pagination.style.display = "";
    ConCoincidencias(contenedor);
    return;
  }

  const productosFiltrados = productosGlobales.filter((producto) => {
    const titulo = producto.title.toLowerCase();
    const descripcion = producto.description?.toLowerCase() || "";
    const categoria = producto.category.toLowerCase();

    // quizás pueda cambiarse a esto: [titulo, descripcion, categoria].includes(filtro)
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

// el nombre de la función es muy ambiguo, los nombres deben explicar de manera breve y puntual lo que se está haciendo
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

// el nombre de la función es muy ambiguo, los nombres deben explicar de manera breve y puntual lo que se está haciendo
function ConCoincidencias(contenedor) {
  const mensaje = document.querySelector("#mensaje-sin-coincidencias");

  if (mensaje) {
    mensaje.remove();
  }

  Array.from(contenedor.children).forEach((producto) => {
    producto.style.display = "";
  });
}
