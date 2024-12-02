import React, { useContext, useState } from "react";
import "./Login.css";
import { login } from "../services/Auth";
import Swal from "sweetalert2";
import { contextoApp } from "../context/Contexto";
import { useNavigate } from "react-router-dom";
import { Rutas } from "../enum/Rutas";

const mensajeRecuperacion = "Se envió la información al correo ingresado.";
const LoginView = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(contextoApp);

  const [showResetModal, setShowResetModal] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [usuario, setUsuario] = useState({
    username: "",
    password: "",
    acceptTerms: false,
  });

  const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowResetModal(true); // Muestra el modal
  };

  const handleCloseModal = () => {
    setShowResetModal(false); // Cierra el modal
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setUsuario({
      ...usuario,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(usuario);

    const respuesta = await login(usuario);

    if (!respuesta.estado) {
      setError(respuesta.mensaje);
      return;
    }

    if (respuesta.datos?.accessToken != null) {
      dispatch({
        type: "ESTABLECER_USUARIO",
        payload: respuesta.datos,
      });

      navigate(Rutas.Principal);
    }
  };

  const recuperarContrasena = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Swal.fire({
      title: "¡Éxito!",
      text: mensajeRecuperacion,
      icon: "success",
      confirmButtonText: "OK",
    });
    setShowResetModal(false);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-modal">
          <h2>Inicia sesión</h2>
          <form onSubmit={onLogin}>
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <input
                type="text"
                id="username"
                placeholder=""
                value={usuario.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder=""
                value={usuario.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={usuario.acceptTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="acceptTerms">
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

            {error && <span className="login-modal_error">{error}</span>}
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
            <form onSubmit={recuperarContrasena}>
              <div className="form-group">
                <label htmlFor="reset-email">Correo electrónico</label>
                <input type="email" id="reset-email" placeholder="" required />
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" id="accept-reset-terms" required />
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
