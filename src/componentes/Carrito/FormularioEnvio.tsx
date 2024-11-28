import { useContext, useState } from "react";
import { useDistritos } from "../../hooks/useDistritos";
import "./FormularioEnvio.css";
import Swal from "sweetalert2";
import { contextoApp } from "../../context/Contexto";
import { useNavigate } from "react-router-dom";
import { FormularioEnvio as FormularioEnvioType } from "../../models/FormularioEnvio.type";
import { Validaciones } from "../../enum/Validaciones";
import { Rutas } from "../../enum/Rutas";

const FormularioEnvio = () => {
  const distritos = useDistritos();
  const { dispatch } = useContext(contextoApp);
  const navegacion = useNavigate();

  const [formulario, setFormulario] = useState<FormularioEnvioType>({
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
        if (!new RegExp(Validaciones.SoloLetrasYEspacios).test(valor.trim())) {
          return "Debe ingresar un nombre valido";
        }
        break;
      case "apellidos":
        if (!new RegExp(Validaciones.SoloLetrasYEspacios).test(valor.trim())) {
          return "Debe ingresar un apellido valido";
        }
        break;
      case "distrito":
        if (!valor.trim()) {
          return "Debe seleccionar un distrito";
        }
        break;
      case "celular":
        if (
          !new RegExp(Validaciones.SoloNumerosDe9Digitos).test(valor.trim())
        ) {
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

    Swal.fire({
      title: "¡Éxito!",
      text: "Su pedido se registro con exito.",
      icon: "success",
      confirmButtonText: "OK",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        dispatch({ type: "VACIAR_CARRITO" });
        navegacion(Rutas.Principal);
      }
    });
  };

  return (
    <div className="formulario-envio">
      <h2>Información de Envío</h2>
      <form role="form" onSubmit={manejarSubmit}>
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
            role="combobox"
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
