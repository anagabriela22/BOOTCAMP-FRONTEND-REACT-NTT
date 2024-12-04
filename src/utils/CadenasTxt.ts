// no hay test
export const soloInicial = (cadena: string | undefined): string => {
  if (!cadena) return "";
  return cadena.charAt(0).toUpperCase();
};

export const convertirAMayuscula = (cadena: string | undefined): string => {
  if (!cadena) return "";
  return cadena.toUpperCase();
};
