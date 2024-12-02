import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalView from "./views/PrincipalView";
import CarritoView from "./views/CarritoView";
import LoginView from "./views/LoginView";
import { useContext } from "react";
import { contextoApp } from "./context/Contexto";
import withAuth from "./hoc/withAuth";

const Rutas = () => {
  const { state } = useContext(contextoApp);
  const { usuario } = state;
  const inicioSesion = usuario ? true : false;

  const PrincipalProtegida = withAuth(PrincipalView);
  const ResumenProtegida = withAuth(CarritoView);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginView />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
        <Route
          path="/principal"
          element={<PrincipalProtegida inicioSesion={inicioSesion} />}
        ></Route>
        <Route
          path="/resumen"
          element={<ResumenProtegida inicioSesion={inicioSesion} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
