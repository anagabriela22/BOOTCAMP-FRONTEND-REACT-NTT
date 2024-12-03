import ErrorApp from "./componentes/ErrorApp";
import { ContextoProveedor } from "./context/Contexto";
import "./componentes/ErrorApp.css";
import Rutas from "./rutas";
import { AuthProvider } from "./context/AuthContexto";

const App = () => {
  return (
    <ContextoProveedor>
      <AuthProvider>
        <Rutas />
      </AuthProvider>
      <ErrorApp></ErrorApp>
    </ContextoProveedor>
  );
};

export default App;
