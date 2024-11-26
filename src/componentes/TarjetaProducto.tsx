import { useContext } from "react";
import { Producto } from "../models/Producto.type";
import { contextoApp } from "../context/Contexto";
import { ProductoCarrito } from "../models/ProductoCarrito.type";

interface TarjetaProductoProps {
  producto: Producto;
}

const TarjetaProducto = ({ producto }: TarjetaProductoProps) => {
  const { state, dispatch } = useContext(contextoApp);

  const { productosCarrito } = state;

  const agregarCarrito = (producto: Producto) => {
    let nuevoProductoCarrito: ProductoCarrito = { producto, cantidad: 1 };

    dispatch({
      type: "AGREGAR_AL_CARRITO",
      payload: nuevoProductoCarrito,
    });
  };

  const estaEnCarrito = (producto: Producto) => {
    // no abreviaciones
    const productoEncontrado = productosCarrito.find(
      (p) => p.producto.id == producto.id
    );

    if (productoEncontrado) return true;

    return false;
  };

  return (
    <div
      className="seccionProductos__cards--Boxes"
      data-categoria={producto.category}
    >
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>{`$${producto.price.toFixed(2)}`}</p>
      <p>{`Disponibilidad: ${producto.availabilityStatus}`}</p>
      {estaEnCarrito(producto) ? (
        <button className="seccionProductos__cards_agregar">
          En el carrito
        </button>
      ) : (
        <button
          className="seccionProductos__cards_agregar"
          onClick={() => {
            agregarCarrito(producto);
          }}
        >
          Agregar al carrito
        </button>
      )}
    </div>
  );
};

export default TarjetaProducto;
