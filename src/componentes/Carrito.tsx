import { useContext } from "react";
import { contextoApp } from "../context/Contexto";
import { useNavigate } from "react-router-dom";

const Carrito = () => {
  const { state } = useContext(contextoApp);

  const { productosCarrito } = state;
  const navigate = useNavigate();

  const irResumen = () => {
    // usemos un enum
    navigate("/resumen");
  };

  return (
    <div>
      <span
        className="seccionNavBarPage__navbar-icon--carrito lnr lnr-cart"
        onClick={() => {
          irResumen();
        }}
      >
        <span
          id="contador-carrito"
          className="seccionNavBarPage__navbar-icon--carrito-numero"
          style={{ display: productosCarrito.length > 0 ? "flex" : "none" }}
        >
          {productosCarrito.length}
        </span>
      </span>
    </div>
  );
};

export default Carrito;
