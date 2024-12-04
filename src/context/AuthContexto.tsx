// no hay test
import React, { createContext, useContext, useState } from "react";
import { UsuarioApi } from "../models/UsuarioApi.type";
import { cargarEstado, guardarEstado } from "../utils/Almacenamiento";

interface AuthContextType {
  usuarioAuth: UsuarioApi | null;
  setUsuarioAuth: (usuario: UsuarioApi | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [usuarioAuth, setUsuarioAuthState] = useState<UsuarioApi | null>(() =>
    cargarEstado("usuario", null)
  );

  const setUsuarioAuth = (usuario: UsuarioApi | null) => {
    // no usar string
    guardarEstado("usuario", usuario); // Guardar el usuario en localStorage
    setUsuarioAuthState(usuario); // Actualizar el estado
  };

  return (
    <AuthContext.Provider value={{ usuarioAuth, setUsuarioAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
};
