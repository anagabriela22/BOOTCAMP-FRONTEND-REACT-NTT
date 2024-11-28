import { useContext } from "react";
import "./ResumenOrden.css";
import { contextoApp } from "../../context/Contexto";

const ResumenOrden = () => {
  const { state } = useContext(contextoApp);
  const { productosCarrito } = state;

  const obtenePrecioTotal = () => {
    const precioTotal = productosCarrito.reduce(
      (acc, producto) => acc + producto.producto.price * producto.cantidad,
      0
    );

    return precioTotal.toFixed(2);
  };
  return (
    <div data-testid="resumen-orden" className="resumen-orden">
      <h2>Resumen de la Orden</h2>
      <div className="resumen-orden_item">
        <span>Subtotal</span>
        <span>S/ {obtenePrecioTotal()}</span>
      </div>
      <div className="resumen-orden_item">
        <span>Gastos de envío</span>
        <span>Gratis</span>
      </div>
      <div className="resumen-orden_total">
        <span>Total</span>
        <span>S/ {obtenePrecioTotal()}</span>
      </div>
    </div>
  );
};

export default ResumenOrden;
