import React, { createContext, ReactNode, useEffect, useReducer } from "react";
import { reducer, estadoInicial, EstadoApp, Accion } from "./Reducer";
import { cargarEstado, guardarEstado } from "../utils/Almacenamiento";

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
  const estadoInicialPersistente = cargarEstado("estadoApp", estadoInicial);

  const [state, dispatch] = useReducer(reducer, estadoInicialPersistente);

  useEffect(() => {
    guardarEstado("estadoApp", state);
  }, [state]);

  return (
    <contextoApp.Provider value={{ state, dispatch }}>
      {children}
    </contextoApp.Provider>
  );
};
