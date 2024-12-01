import React, { useState } from "react";
import "./Login.css";

const LoginView = () => {
  const [showResetModal, setShowResetModal] = useState(false);

  const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowResetModal(true); // Muestra el modal
  };

  const handleCloseModal = () => {
    setShowResetModal(false); // Cierra el modal
  };

  return (
    <>
      <div className="login-container">
        <div className="login-modal">
          <h2>Inicia sesión</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="tuemail@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" placeholder="********" />
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="accept-terms" />
              <label htmlFor="accept-terms">
                Acepto las <a href="#">políticas de uso de datos personales</a>.
              </label>
            </div>
            <div className="form-group">
              <a
                href="#"
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Olvidé mi contraseña
              </a>
            </div>
            <button type="submit" className="btn-login">
              Ingresar
            </button>
          </form>
        </div>
      </div>

      {/* Modal para restablecer contraseña */}
      {showResetModal && (
        <div className="modal-overlay">
          <div className="reset-modal">
            <button className="close-modal" onClick={handleCloseModal}>
              &times;
            </button>
            <h2>Ingresa tu correo</h2>
            <form>
              <div className="form-group">
                <label htmlFor="reset-email">Correo electrónico</label>
                <input
                  type="email"
                  id="reset-email"
                  placeholder="Ej: jose@mail.com"
                />
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="accept-reset-terms" />
                <label htmlFor="accept-reset-terms">
                  Acepto las{" "}
                  <a href="#">políticas de uso de datos personales</a>.
                </label>
              </div>
              <button type="submit" className="btn-reset">
                Continuar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginView;
