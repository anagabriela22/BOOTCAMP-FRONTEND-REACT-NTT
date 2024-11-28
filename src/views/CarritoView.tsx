import FormularioEnvio from "../componentes/Carrito/FormularioEnvio";
import ResumenOrden from "../componentes/Carrito/ResumenOrden";
import TablaProductos from "../componentes/Carrito/TablaProductos";
import Navegacion from "../componentes/Navegacion";
import "../componentes/Carrito.css";

const CarritoView = () => {
  return (
    <>
      <Navegacion ocultarControles ocultarContactos />
      <div className="carrito-container">
        <h1 className="carrito-container_titulo">Mi Carrito</h1>
        <div className="carrito-container_contenido">
          <div className="carrito-container_izqu">
            <TablaProductos />
          </div>
          <div className="carrito-container_derec">
            <ResumenOrden />
          </div>
        </div>
        <FormularioEnvio />
      </div>
    </>
  );
};

export default CarritoView;
