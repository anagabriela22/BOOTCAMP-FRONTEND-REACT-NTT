import { obtenerProductos } from "../services/Productos";
import { incrementarContador } from "./IncrementarContador";

export let productosGlobales = [];
export let paginaActual = 1;
const elementosPorPagina = 10;

export async function mostrarProductos(elemento) {
  productosGlobales = await obtenerProductos();

  renderizarPagina(productosGlobales, elemento, paginaActual);
  crearControlesPaginacion(productosGlobales, elemento);
}

export function renderizarPagina(productos, elemento, pagina) {
  elemento.innerHTML = "";

  const inicioIndice = (pagina - 1) * elementosPorPagina;
  const finalIndice = inicioIndice + elementosPorPagina;
  const productosPagina = productos.slice(inicioIndice, finalIndice);

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
      incrementarContador(document.querySelector("#contador-carrito"));
    });

    tarjetaProducto.appendChild(imagenProducto);
    tarjetaProducto.appendChild(tituloProducto);
    tarjetaProducto.appendChild(precioProducto);
    tarjetaProducto.appendChild(disponibilidadProducto);
    tarjetaProducto.appendChild(agregarProducto);

    elemento.appendChild(tarjetaProducto);
  });
}

function crearControlesPaginacion(productos, elemento) {
  const paginasTotales = Math.ceil(productos.length / elementosPorPagina);

  const contenedorPaginacion = document.createElement("div");
  contenedorPaginacion.classList.add("paginacion");

  for (let i = 1; i <= paginasTotales; i++) {
    const boton = document.createElement("button");
    boton.textContent = i;
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

  elemento.parentNode.appendChild(contenedorPaginacion);
}

function actualizarBotonesPaginacion(contenedor, paginaActivada) {
  const botones = contenedor.querySelectorAll(".paginacion__boton");
  botones.forEach((boton, i) => {
    if (i + 1 === paginaActivada) {
      boton.classList.add("active");
    } else {
      boton.classList.remove("active");
    }
  });
}
