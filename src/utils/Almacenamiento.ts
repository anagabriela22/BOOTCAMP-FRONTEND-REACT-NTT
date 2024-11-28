export const cargarEstado = (clave: string, estadoPorDefecto: any) => {
  const estadoGuardado = localStorage.getItem(clave);
  return estadoGuardado ? JSON.parse(estadoGuardado) : estadoPorDefecto;
};

export const guardarEstado = (clave: string, estado: any) => {
  localStorage.setItem(clave, JSON.stringify(estado));
};
