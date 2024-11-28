import ErrorApp from "./componentes/ErrorApp";
import { ContextoProveedor } from "./context/Contexto";
import "./componentes/ErrorApp.css";
import Rutas from "./rutas";

const App = () => {
  return (
    <ContextoProveedor>
      <Rutas />
      <ErrorApp></ErrorApp>
    </ContextoProveedor>
  );
};

export default App;
