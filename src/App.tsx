import Banner from "./componentes/Banner";
import { Footer } from "./componentes/Footer";
import Navegacion from "./componentes/Navegacion";
import { Productos } from "./componentes/Productos";
import { Servicios } from "./componentes/Servicios";
import { BotonScroll } from "./componentes/BotonScroll";
import "./estilos.css";
import { useEffect } from "react";
import { funcionalidadScroll } from "./utils/FuncionalidadScroll";
import { disenoResponsivo } from "./utils/DisenoResponsivo";
import { ContextoProveedor } from "./context/Contexto";

const App = () => {
  useEffect(() => {
    funcionalidadScroll();
    disenoResponsivo();
  });

  return (
    <ContextoProveedor>
      <Navegacion />
      <Banner />
      <Productos />
      <Servicios />
      <Footer />
      <BotonScroll />
    </ContextoProveedor>
  );
};

export default App;
