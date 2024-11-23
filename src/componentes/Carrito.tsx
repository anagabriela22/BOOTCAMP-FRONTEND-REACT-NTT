import { useContext } from "react";
import { contextoApp } from "../context/Contexto";

const Carrito = () => {
  const { carritoContador } = useContext(contextoApp);
  return (
    <div>
      <span className="seccionNavBarPage__navbar-icon--carrito lnr lnr-cart">
        <span
          id="contador-carrito"
          className="seccionNavBarPage__navbar-icon--carrito-numero"
          style={{ display: carritoContador > 0 ? "flex" : "none" }}
        >
          {carritoContador}
        </span>
      </span>
    </div>
  );
};

export default Carrito;
