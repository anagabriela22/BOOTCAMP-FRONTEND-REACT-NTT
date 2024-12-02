export interface RespuestaApi<T> {
  estado: boolean;
  mensaje: string;
  datos: T;
}
