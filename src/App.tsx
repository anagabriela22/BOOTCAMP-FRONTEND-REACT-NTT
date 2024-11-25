import { ContextoProveedor } from "./context/Contexto";

import Rutas from "./rutas";

const App = () => {
  return (
    <ContextoProveedor>
      <Rutas />
    </ContextoProveedor>
  );
};

export default App;
