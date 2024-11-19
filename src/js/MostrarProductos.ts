import { Producto } from "../models/Producto.type";
import { ObtenerProductos } from "../services/Productos";
import { IncrementarContador } from "./IncrementarContador";

export let productosGlobales: Producto[] = [];
export let currentPage: number = 1;
const itemsPerPage: number = 10;

export async function MostrarProductos(element: HTMLElement): Promise<void> {
  try {
    productosGlobales = await ObtenerProductos();

    renderPage(productosGlobales, element, currentPage);
    createPaginationControls(productosGlobales, element);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    element.innerHTML = `<p>Error al cargar los productos. Por favor, intentalo nuevamente.</p>`;
  }
}
export function renderPage(
  productos: Producto[],
  element: HTMLElement,
  page: number
): void {
  element.innerHTML = "";

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productosPagina = productos.slice(startIndex, endIndex);

  productosPagina.forEach((producto) => {
    const tarjetaProducto = document.createElement("div");
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
      const contadorCarrito = document.querySelector("#contador-carrito");
      if (contadorCarrito instanceof HTMLElement) {
        IncrementarContador(contadorCarrito);
      } else {
        console.error(
          'No se encontro un elemento valido con el selector "#contador-carrito".'
        );
      }
    });

    tarjetaProducto.appendChild(imagenProducto);
    tarjetaProducto.appendChild(tituloProducto);
    tarjetaProducto.appendChild(precioProducto);
    tarjetaProducto.appendChild(disponibilidadProducto);
    tarjetaProducto.appendChild(agregarProducto);

    element.appendChild(tarjetaProducto);
  });
}

function createPaginationControls(
  productos: Producto[],
  element: HTMLElement
): void {
  const totalPages = Math.ceil(productos.length / itemsPerPage);

  const paginationContainer = document.createElement("div");
  paginationContainer.classList.add("pagination");

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i.toString();
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

  const parentElement = element.parentNode as HTMLElement;
  parentElement.appendChild(paginationContainer);
}

function updatePaginationButtons(
  container: HTMLElement,
  activePage: number
): void {
  const buttons = container.querySelectorAll(".pagination__button");
  buttons.forEach((button, index) => {
    if (index + 1 === activePage) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}
