import { useContext } from "react";
import "../../css/carrito/TablaProductos.css";
import { contextoApp } from "../../context/Contexto";
import { ProductoCarrito } from "../../models/ProductoCarrito.type";

const TablaProductos = () => {
  const { state, dispatch } = useContext(contextoApp);
  const { productosCarrito } = state;

  const decrementarCantidad = (productoCarrito: ProductoCarrito) => {
    // no usemos abreviaciones
    const productoEncontrado = productosCarrito.find(
      (p) => p.producto.id == productoCarrito.producto.id
    );
    if (productoEncontrado == null) return;

    const nuevaCantidad = productoEncontrado.cantidad - 1;

    if (nuevaCantidad < 1) return;

    dispatch({
      type: "ACTUALIZAR_CANTIDAD",
      payload: {
        id: productoCarrito.producto.id,
        cantidad: nuevaCantidad,
      },
    });
  };

  const incrementarCantidad = (productoCarrito: ProductoCarrito) => {
    const nuevaCantidad = productoCarrito.cantidad + 1;

    dispatch({
      type: "ACTUALIZAR_CANTIDAD",
      payload: { id: productoCarrito.producto.id, cantidad: nuevaCantidad },
    });
  };

  const obtenerPrecioPorCantidad = (productoCarrito: ProductoCarrito) => {
    return (productoCarrito.producto.price * productoCarrito.cantidad).toFixed(
      2
    );
  };

  const eliminarProductoDeCarrito = (productoCarrito: ProductoCarrito) => {
    dispatch({
      type: "ELIMINAR_DEL_CARRITO",
      payload: productoCarrito.producto.id,
    });
  };

  return (
    <div className="tabla-productos">
      <table className="tabla-productos_tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productosCarrito.map((producto) => (
            <tr key={producto.producto.id}>
              <td>
                <img
                  src={producto.producto.thumbnail}
                  alt={producto.producto.title}
                />
              </td>
              <td>{producto.producto.title}</td>
              <td>{`$${producto.producto.price.toFixed(2)}`}</td>
              {
                <td>
                  <button
                    className="tabla-productos_btn-contador"
                    onClick={() => decrementarCantidad(producto)}
                  >
                    -
                  </button>
                  {producto.cantidad}
                  <button
                    className="tabla-productos_btn-contador"
                    onClick={() => incrementarCantidad(producto)}
                  >
                    +
                  </button>
                </td>
              }
              <td>{`$${obtenerPrecioPorCantidad(producto)}`}</td>
              <td>
                <button
                  className="tabla-productos_btn-eliminar"
                  onClick={() => {
                    eliminarProductoDeCarrito(producto);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
