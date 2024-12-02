import { url_base } from "../environment";
import { RespuestaApi } from "../models/RespuestaApi.type";
import { Usuario } from "../models/Usuario.type";
import { UsuarioApi } from "../models/UsuarioApi.type";

export async function login({
  username,
  password,
}: Usuario): Promise<RespuestaApi<UsuarioApi | null>> {
  let respuesta: RespuestaApi<UsuarioApi | null> = {
    estado: false,
    mensaje: "Error inesperado",
    datos: null,
  };

  try {
    const url = url_base + "/auth/login";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
    });

    let json = await res.json();

    if (json.message) {
      throw new Error(json.message);
    } else {
      respuesta = {
        estado: true,
        mensaje: "",
        datos: json,
      };
      return respuesta;
    }
  } catch (error) {
    if (error instanceof Error) {
      respuesta = {
        estado: false,
        mensaje: error.message,
        datos: null,
      };
    }
    return respuesta;
  }
}
