import { useContext, useEffect } from "react";

import { funcionalidadScroll } from "../utils/FuncionalidadScroll";
import { disenoResponsivo } from "../utils/DisenoResponsivo";

import Banner from "../componentes/Banner";
import Footer from "../componentes/Footer";
import Navegacion from "../componentes/Navegacion";
import Productos from "../componentes/Productos";
import Servicios from "../componentes/Servicios";
import BotonScroll from "../componentes/BotonScroll";

import "./Principal.css";
import { obtenerProductos } from "../services/Productos";
import { contextoApp } from "../context/Contexto";

const PrincipalView = () => {
  const { state, dispatch } = useContext(contextoApp);

  useEffect(() => {
    funcionalidadScroll();
    disenoResponsivo();

    const cargarProductos = async () => {
      try {
        if (state.productos.length === 0) {
          const productosObtenidos = await obtenerProductos();

          dispatch({
            type: "ESTABLECER_PRODUCTOS",
            payload: productosObtenidos,
          });

          dispatch({
            type: "ESTABLECER_PRODUCTOS_FILTRADOS",
            payload: productosObtenidos,
          });
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    cargarProductos();
  }, []);

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
