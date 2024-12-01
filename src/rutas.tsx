import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalView from "./views/PrincipalView";
import CarritoView from "./views/CarritoView";
import LoginView from "./views/LoginView";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginView />}></Route>
        <Route path="/login" element={<LoginView />}></Route>
        <Route path="/principal" element={<PrincipalView />}></Route>
        <Route path="/resumen" element={<CarritoView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
