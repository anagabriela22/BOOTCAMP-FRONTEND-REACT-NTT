import { useContext, useState } from "react";
import TarjetaProducto from "./TarjetaProducto";
import Paginacion from "./Paginacion";
import { contextoApp } from "../context/Contexto";
import { Producto } from "../models/Producto.type";

const primeraPagina = 1;
const elementosPorPagina = 10;

const Productos = () => {
  console.log("PRODUCTOS");
  
  const { state } = useContext(contextoApp);

  const { productosFiltrados, modoFiltro } = state;
  console.log({modoFiltro});
  

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

          {!modoFiltro && (
            
                    <Paginacion
                      totalElementos={productosFiltrados.length}
                      elementosPorPagina={elementosPorPagina}
                      paginaActual={paginaActual}
                      onPageChange={setPaginaActual}
                    />


          )}
      </div>
    </div>
  );
};

export default Productos;
