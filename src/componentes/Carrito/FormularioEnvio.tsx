// si se pone espacios vacios en nombres y apellidos igual registra

import { useContext, useState } from "react";
import { useDistritos } from "../../hooks/useDistritos";
import "../../css/carrito/FormularioEnvio.css";
import Swal from "sweetalert2";
import { contextoApp } from "../../context/Contexto";
import { useNavigate } from "react-router-dom";

const FormularioEnvio = () => {
  const distritos = useDistritos();
  const { dispatch } = useContext(contextoApp);
  const navegacion = useNavigate();

  // usemos una interfaz para especificar la key
  const [formulario, setFormulario] = useState<{ nombres: string; apellidos: string; /** etc */ }>({
    nombres: "",
    apellidos: "",
    distrito: "",
    direccion: "",
    referencia: "",
    celular: "",
  });

  const [errores, setErrores] = useState<Record<string, string>>({});

  const validarCampo = (campo: string, valor: string) => {
    switch (campo) {
      case "nombres":
      case "apellidos":
        // que hace este regex? usemos un enum para agruparlos
        if (!/^[a-zA-Z\s]+$/.test(valor)) {
          return "Debe ingresar un valor valido";
        }
        break;
      case "distrito":
        if (!valor) {
          return "Debe seleccionar un distrito";
        }
        break;
      case "celular":
        // que hace este regex? usemos un enum para agruparlos
        if (!/^\d{9}$/.test(valor)) {
          return "Debe ingresar un número de celular valido";
        }
        break;
      default:
        if (!valor.trim()) {
          return "Campo obligatorio";
        }
    }
    return "";
  };

  const manejarCambio = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrores((prev) => ({
      ...prev,
      [name]: validarCampo(name, value),
    }));
  };

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const erroresValidacion: Record<string, string> = {};
    Object.keys(formulario).forEach((campo) => {
      const error = validarCampo(
        campo,
        formulario[campo as keyof typeof formulario]
      );
      if (error) {
        erroresValidacion[campo] = error;
      }
    });

    if (Object.keys(erroresValidacion).length > 0) {
      setErrores(erroresValidacion);
      return;
    }

    // esto podr'ia estar en otro archivo para reutilizarlo
    Swal.fire({
      title: "¡Éxito!",
      text: "Su pedido se registro con exito.",
      icon: "success",
      confirmButtonText: "OK",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        dispatch({ type: "VACIAR_CARRITO" });
        // usemos enum
        navegacion("/");
      }
    });
    console.log(formulario);
  };

  return (
    <div className="formulario-envio">
      <h2>Información de Envío</h2>
      <form onSubmit={manejarSubmit}>
        <div className="formulario-envio_control">
          <input
            type="text"
            name="nombres"
            placeholder="Ingresa tus nombres"
            value={formulario.nombres}
            onChange={manejarCambio}
          />
          {errores.nombres && (
            <span className="formulario-envio_control_error">
              {errores.nombres}
            </span>
          )}
        </div>
        <div className="formulario-envio_control">
          <input
            type="text"
            name="apellidos"
            placeholder="Ingresa tus apellidos"
            value={formulario.apellidos}
            onChange={manejarCambio}
          />
          {errores.apellidos && (
            <span className="formulario-envio_control_error">
              {errores.apellidos}
            </span>
          )}
        </div>
        <div className="formulario-envio_control">
          <select
            name="distrito"
            value={formulario.distrito}
            onChange={manejarCambio}
          >
            <option value="">Selecciona tu distrito</option>
            {distritos.map((d) => (
              <option key={d.id} value={d.id}>
                {d.nombre}
              </option>
            ))}
          </select>
          {errores.distrito && (
            <span className="formulario-envio_control_error">
              {errores.distrito}
            </span>
          )}
        </div>
        <div className="formulario-envio_control">
          <input
            type="text"
            name="direccion"
            placeholder="Ingresa tu dirección"
            value={formulario.direccion}
            onChange={manejarCambio}
          />
          {errores.direccion && (
            <span className="formulario-envio_control_error">
              {errores.direccion}
            </span>
          )}
        </div>
        <div className="formulario-envio_control">
          <input
            type="text"
            name="referencia"
            placeholder="Referencia de tu dirección"
            value={formulario.referencia}
            onChange={manejarCambio}
          />
          {errores.referencia && (
            <span className="formulario-envio_control_error">
              {errores.referencia}
            </span>
          )}
        </div>
        <div className="formulario-envio_control">
          <input
            type="tel"
            name="celular"
            placeholder="Ingresa tu número de celular"
            value={formulario.celular}
            onChange={manejarCambio}
          />
          {errores.celular && (
            <span className="formulario-envio_control_error">
              {errores.celular}
            </span>
          )}
        </div>
        <button type="submit" className="formulario-envio_btn-comprar">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default FormularioEnvio;
