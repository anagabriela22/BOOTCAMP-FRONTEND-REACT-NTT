import { useContext, useEffect, useState } from "react";

import { obtenerProductos } from "../services/Productos";
import TarjetaProducto from "./TarjetaProducto";
import Paginacion from "./Paginacion";
import { contextoApp } from "../context/Contexto";
import { Producto } from "../models/Producto.type";

const primeraPagina = 1;
const elementosPorPagina = 10;

const Productos = () => {
  const { state, dispatch } = useContext(contextoApp);

  const { productosFiltrados, modoFiltro } = state;

  const [paginaActual, setPaginaActual] = useState<number>(primeraPagina);

  const obtenerProductosPorPagina = (
    productos: Producto[],
    pagina: number,
    elementosPorPagina: number
  ) => {
    return productos.slice(
      (pagina - 1) * elementosPorPagina,
      pagina * elementosPorPagina
    );
  };

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const productosObtenidos = await obtenerProductos();

        dispatch({
          type: "ESTABLECER_PRODUCTOS",
          payload: productosObtenidos,
        });
        dispatch({
          type: "ESTABLECER_PRODUCTOS_FILTRADOS",
          payload: productosObtenidos,
        });
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    if (!productosFiltrados.length) {
      cargarProductos();
    }
  }, [productosFiltrados, dispatch]);
  let productosPagina = [];

  if (modoFiltro === false) {
    productosPagina = obtenerProductosPorPagina(
      productosFiltrados,
      paginaActual,
      elementosPorPagina
    );
  } else {
    productosPagina = obtenerProductosPorPagina(
      productosFiltrados,
      primeraPagina,
      elementosPorPagina
    );
  }

  return (
    <div data-testid="Productos" className="productos-container">
      <div className="seccionProductos">
        <p className="seccionProductos__titulo">Productos Top</p>

        <div className="seccionProductos__cards">
          {productosPagina.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>

        <Paginacion
          totalElementos={productosFiltrados.length}
          elementosPorPagina={elementosPorPagina}
          paginaActual={paginaActual}
          onPageChange={setPaginaActual}
        />
      </div>
    </div>
  );
};

export default Productos;
