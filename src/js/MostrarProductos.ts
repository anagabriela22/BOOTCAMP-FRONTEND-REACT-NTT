import { Producto } from "../models/Producto.type";
import { obtenerProductos } from "../services/Productos";
import { incrementarContador } from "./IncrementarContador";

export let productosGlobales: Producto[] = [];
export let paginaActual: number = 1;
const elementosPorPagina: number = 10;

export async function mostrarProductos(elemento: HTMLElement): Promise<void> {
  try {
    productosGlobales = await obtenerProductos();

    renderizarPagina(productosGlobales, elemento, paginaActual);
    crearControlesPaginacion(productosGlobales, elemento);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    elemento.innerHTML = `<p>Error al cargar los productos. Por favor, intentalo nuevamente.</p>`;
  }
}
export function renderizarPagina(
  productos: Producto[],
  elemento: HTMLElement,
  pagina: number
): void {
  elemento.innerHTML = "";

  const inicioIndice = (pagina - 1) * elementosPorPagina;
  const finIndice = inicioIndice + elementosPorPagina;
  const productosPagina = productos.slice(inicioIndice, finIndice);

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
        incrementarContador(contadorCarrito);
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

    elemento.appendChild(tarjetaProducto);
  });
}

function crearControlesPaginacion(
  productos: Producto[],
  elemento: HTMLElement
): void {
  const totalPaginas = Math.ceil(productos.length / elementosPorPagina);

  const contenedorPaginacion = document.createElement("div");
  contenedorPaginacion.classList.add("paginacion");

  for (let i = 1; i <= totalPaginas; i++) {
    const boton = document.createElement("button");
    boton.textContent = i.toString();
    boton.classList.add("paginacion__boton");

    if (i === paginaActual) {
      boton.classList.add("active");
    }

    boton.addEventListener("click", () => {
      paginaActual = i;
      renderizarPagina(productos, elemento, paginaActual);
      actualizarBotonesPaginacion(contenedorPaginacion, i);
    });

    contenedorPaginacion.appendChild(boton);
  }

  const elementoPadre = elemento.parentNode as HTMLElement;
  elementoPadre.appendChild(contenedorPaginacion);
}

function actualizarBotonesPaginacion(
  contenedor: HTMLElement,
  paginaActivada: number
): void {
  const botones = contenedor.querySelectorAll(".paginacion__boton");
  botones.forEach((boton, i) => {
    if (i + 1 === paginaActivada) {
      boton.classList.add("active");
    } else {
      boton.classList.remove("active");
    }
  });
}
