// no hay test
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalView from "./views/PrincipalView";
import CarritoView from "./views/CarritoView";
import LoginView from "./views/LoginView";
import withAuth from "./hoc/withAuth";
import { useAuth } from "./context/AuthContexto";

const Rutas = () => {
  const { usuarioAuth } = useAuth();

  const PrincipalProtegida = withAuth(PrincipalView);
  const ResumenProtegida = withAuth(CarritoView);

  return (
    <BrowserRouter>
      <Routes>
        
        {/* tal vez usar un redireccionamiento
         <Route path="*" element={<Navigate to="/login" replace />} /> */}
        <Route path="/login" element={<LoginView />}></Route>
        <Route
          path="/principal"
          element={<PrincipalProtegida inicioSesion={!!usuarioAuth} />}
        ></Route>
        <Route
          path="/resumen"
          element={<ResumenProtegida inicioSesion={!!usuarioAuth} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
