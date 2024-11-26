import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import { reducer, estadoInicial, EstadoApp, Accion } from "./Reducer";

export interface ContextoProps {
  state: EstadoApp;
  dispatch: React.Dispatch<Accion>;
}

export const contextoApp = createContext<ContextoProps>({
  state: estadoInicial,
  dispatch: () => null,
});

export const ContextoProveedor: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //const [state, dispatch] = useReducer(reducer, estadoInicial);

  // el trabajo del proveedor es proveer los valores del contexto y la acci'on para actualizarlos, no deben tener l'ogica que incluya lectura de storage, conversi'on de valores o algo similar, esto deber'ia estar en otro archivo.
  const estadoGuardado = localStorage.getItem("estadoApp");
  const estadoInicialPersistente = estadoGuardado
    ? JSON.parse(estadoGuardado)
    : estadoInicial;

  const [state, dispatch] = useReducer(reducer, estadoInicialPersistente);

  // Guardar el estado en localStorage cada vez que cambie

  useEffect(() => {
    // igual aqu'i
    localStorage.setItem("estadoApp", JSON.stringify(state));
  }, [state]);

  return (
    <contextoApp.Provider value={{ state, dispatch }}>
      {children}
    </contextoApp.Provider>
  );
};
