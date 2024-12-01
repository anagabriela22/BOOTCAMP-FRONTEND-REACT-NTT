import "./NavUser.css";
import { useState } from "react";

const NavUser = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="user-container">
      <div className="user-container_content">
        <div className="user-container_icons">
          <div className="user-icon">A</div>
          <i
            className="fa fa-chevron-down user-container_icons_flecha"
            onClick={toggleMenu}
          ></i>
        </div>
        <span className="user-container_content_text">Mi Cuenta</span>
      </div>

      {isMenuVisible && (
        <div className="user-menu">
          <p>¡BIENVENIDO ANA GABRIELA!</p>
          <button className="logout-button">
            <span className="logout-icon">🔓</span> Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default NavUser;
