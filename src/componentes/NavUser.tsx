import { useNavigate } from "react-router-dom";
import { convertirAMayuscula, soloInicial } from "../utils/CadenasTxt";
import "./NavUser.css";
import {  useState } from "react";
import { Rutas } from "../enum/Rutas";
import { cargarEstado, guardarEstado } from "../utils/Almacenamiento";

const NavUser = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const navigate = useNavigate();
  const usuario = cargarEstado("usuario", null)      

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const cerrarSession = () => {
    guardarEstado("usuario", null)
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
