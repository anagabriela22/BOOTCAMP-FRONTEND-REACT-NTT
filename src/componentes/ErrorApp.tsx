import { useContext } from "react";
import { contextoApp } from "../context/Contexto";

export default function ErrorApp() {
  const { state } = useContext(contextoApp);
  const { erorApp } = state;

  return erorApp != null && <div className="div-error-app">{erorApp}</div>;
}
