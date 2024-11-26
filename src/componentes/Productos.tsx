import { useContext, useEffect, useState } from "react";

import { obtenerProductos } from "../services/Productos";
import TarjetaProducto from "./TarjetaProducto";
import Paginacion from "./Paginacion";
import { contextoApp } from "../context/Contexto";

export const Productos = () => {
  const { state, dispatch } = useContext(contextoApp);

  const { productosFiltrados, modoFiltro } = state;

  // no usemos n'umeros m'agicos usemos constantes
  const [paginaActual, setPaginaActual] = useState<number>(1);

  // valor constantes deben ir fuera del componente
  const elementosPorPagina = 10;

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
    (async () => {
      await cargarProductos();
    })();
  }, []);
  let productosPagina = [];

  // usemos el triple igual
  if (modoFiltro === false) {
    // mucha l'ogica debe estar encapsulado
    productosPagina = productosFiltrados.slice(
      (paginaActual - 1) * elementosPorPagina,
      paginaActual * elementosPorPagina
    );
  } else {
    let paginaActualUno = 1;
    productosPagina = productosFiltrados.slice(
      (paginaActualUno - 1) * elementosPorPagina,
      paginaActualUno * elementosPorPagina
    );
  }

  return (
    <div className="productos-container">
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
