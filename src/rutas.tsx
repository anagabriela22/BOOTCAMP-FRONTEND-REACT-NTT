import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrincipalView from "./views/PrincipalView";
import CarritoView from "./views/CarritoView";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PrincipalView />}></Route>
        <Route path="/principal" element={<PrincipalView />}></Route>
        <Route path="/resumen" element={<CarritoView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
