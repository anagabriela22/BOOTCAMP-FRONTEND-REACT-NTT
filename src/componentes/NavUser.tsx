import { useNavigate } from "react-router-dom";
import { convertirAMayuscula, soloInicial } from "../utils/CadenasTxt";
import "./NavUser.css";
import { useState } from "react";
import { Rutas } from "../enum/Rutas";
import { useAuth } from "../context/AuthContexto";

const NavUser = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const navigate = useNavigate();
  const { usuarioAuth, setUsuarioAuth } = useAuth();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const cerrarSession = () => {
    setUsuarioAuth(null);
    navigate(Rutas.Login);
  };

  return (
    <div className="user-container">
      <div className="user-container_content">
        <div className="user-container_icons">
          <div className="user-icon">{soloInicial(usuarioAuth?.firstName)}</div>
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
          <p>¡BIENVENIDO {convertirAMayuscula(usuarioAuth?.username)}!</p>
          <button className="logout-button" onClick={cerrarSession}>
            <span className="logout-icon">🔓</span> Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default NavUser;
