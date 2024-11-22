import { ObtenerProductos } from "../services/Productos";
import { IncrementarContador } from "./IncrementarContador";

export let productosGlobales = [];
export let currentPage = 1;
const itemsPerPage = 10;

export async function MostrarProductos(element) {
  productosGlobales = await ObtenerProductos();

  renderPage(productosGlobales, element, currentPage);
  createPaginationControls(productosGlobales, element);
}

export function renderPage(productos, element, page) {
  element.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productosPagina = productos.slice(startIndex, endIndex);

  productosPagina.forEach((producto) => {
    const tarjetaProducto = document.createElement("div");
    // un solo idioma
    tarjetaProducto.classList.add("seccionProductos__cards--Boxes");
    tarjetaProducto.setAttribute("data-categoria", producto.category);

    const imagenProducto = document.createElement("img");
    imagenProducto.setAttribute("src", producto.thumbnail);
    imagenProducto.setAttribute("alt", producto.title);

    const tituloProducto = document.createElement("h3");
    tituloProducto.textContent = producto.title;

    const precioProducto = document.createElement("p");
    precioProducto.textContent = `$${producto.price.toFixed(2)}`;

    const disponibilidadProducto = document.createElement("p");
    disponibilidadProducto.textContent = `Disponibilidad: ${producto.availabilityStatus}`;

    const agregarProducto = document.createElement("button");
    agregarProducto.textContent = "Agregar al carrito";
    agregarProducto.classList.add("seccionProductos__cards_agregar");
    agregarProducto.addEventListener("click", () => {
      IncrementarContador(document.querySelector("#contador-carrito"));
    });

    tarjetaProducto.appendChild(imagenProducto);
    tarjetaProducto.appendChild(tituloProducto);
    tarjetaProducto.appendChild(precioProducto);
    tarjetaProducto.appendChild(disponibilidadProducto);
    tarjetaProducto.appendChild(agregarProducto);

    element.appendChild(tarjetaProducto);
  });
}

function createPaginationControls(productos, element) {
  const totalPages = Math.ceil(productos.length / itemsPerPage);

  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination");

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("pagination__button");

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentPage = i;
      renderPage(productos, element, currentPage);
      updatePaginationButtons(paginationContainer, i);
    });

    paginationContainer.appendChild(button);
  }

  element.parentNode.appendChild(paginationContainer);
}

function updatePaginationButtons(container, activePage) {
  const buttons = container.querySelectorAll(".pagination__button");
  buttons.forEach((button, index) => {
    if (index + 1 === activePage) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
