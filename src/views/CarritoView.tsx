import FormularioEnvio from "../componentes/Carrito/FormularioEnvio";
import ResumenOrden from "../componentes/Carrito/ResumenOrden";
import TablaProductos from "../componentes/Carrito/TablaProductos";
import Navegacion from "../componentes/Navegacion";
import "../css/carrito/Carrito.css";

const CarritoView = () => {
  return (
    <>
      <Navegacion ocultarControles={true}></Navegacion>
      <div className="carrito-container">
        <h1 className="carrito-titulo">Mi Carrito</h1>
        <div className="carrito-content">
          <div className="carrito-left">
            <TablaProductos />
          </div>
          <div className="carrito-right">
            <ResumenOrden />
          </div>
        </div>
        <FormularioEnvio />
      </div>
    </>
  );
};

export default CarritoView;
