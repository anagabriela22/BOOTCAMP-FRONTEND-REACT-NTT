import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalView from "./views/PrincipalView";
import CarritoView from "./views/CarritoView";
import LoginView from "./views/LoginView";
import withAuth from "./hoc/withAuth";
import {cargarEstado} from "./utils/Almacenamiento";
const Rutas = () => {
  const usuario = cargarEstado("usuario", null)      

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
