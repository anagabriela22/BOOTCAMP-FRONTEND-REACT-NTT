import { useNavigate } from "react-router-dom";
import { contextoApp } from "../context/Contexto";
import { convertirAMayuscula, soloInicial } from "../utils/CadenasTxt";
import "./NavUser.css";
import { useContext, useState } from "react";
import { Rutas } from "../enum/Rutas";

const NavUser = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const { state, dispatch } = useContext(contextoApp);

  const navigate = useNavigate();
  const { usuario } = state;
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const cerrarSession = () => {
    dispatch({ type: "ESTABLECER_USUARIO", payload: null });
    navigate(Rutas.Login);
  };

  return (
    <div className="user-container">
      <div className="user-container_content">
        <div className="user-container_icons">
          <div className="user-icon">{soloInicial(usuario?.firstName)}</div>
          <i
            role="button"
            className="fa fa-chevron-down user-container_icons_flecha"
            onClick={toggleMenu}
          ></i>
        </div>
        <span className="user-container_content_text">Mi Cuenta</span>
      </div>

      {isMenuVisible && (
        <div className="user-menu">
          <p>¡BIENVENIDO {convertirAMayuscula(usuario?.username)}!</p>
          <button className="logout-button" onClick={cerrarSession}>
            <span className="logout-icon">🔓</span> Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default NavUser;
