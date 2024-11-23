import { useContext } from "react";
import { Producto } from "../models/Producto.type";
import { contextoApp } from "../context/Contexto";

interface TarjetaProductoProps {
  producto: Producto;
}

const TarjetaProducto = ({ producto }: TarjetaProductoProps) => {
  const { incrementarCarritoContador } = useContext(contextoApp);
  return (
    <div
      className="seccionProductos__cards--Boxes"
      data-categoria={producto.category}
    >
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>{`$${producto.price.toFixed(2)}`}</p>
      <p>{`Disponibilidad: ${producto.availabilityStatus}`}</p>
      <button
        className="seccionProductos__cards_agregar"
        onClick={incrementarCarritoContador}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default TarjetaProducto;
