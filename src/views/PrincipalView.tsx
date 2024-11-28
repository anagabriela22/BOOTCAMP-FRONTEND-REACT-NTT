import { useEffect } from "react";

import { funcionalidadScroll } from "../utils/FuncionalidadScroll";
import { disenoResponsivo } from "../utils/DisenoResponsivo";

import Banner from "../componentes/Banner";
import { Footer } from "../componentes/Footer";
import Navegacion from "../componentes/Navegacion";
import { Productos } from "../componentes/Productos";
import { Servicios } from "../componentes/Servicios";
import { BotonScroll } from "../componentes/BotonScroll";

import "./Principal.css";

const PrincipalView = () => {
  useEffect(() => {
    funcionalidadScroll();
    disenoResponsivo();
  });

  return (
    <>
      <Navegacion ocultarControles={false} ocultarContactos={false} />
      <Banner />
      <Productos />
      <Servicios />
      <Footer />
      <BotonScroll />
    </>
  );
};

export default PrincipalView;
