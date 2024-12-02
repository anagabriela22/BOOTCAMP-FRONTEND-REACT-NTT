import React from "react";
import { Navigate } from "react-router-dom";
import { Rutas } from "../enum/Rutas";

interface WithAuthProps {
  inicioSesion: boolean;
}

const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return ({ inicioSesion, ...props }: WithAuthProps & P) => {
    console.log({ inicioSesion });

    if (!inicioSesion) {
      return <Navigate to={Rutas.Login} replace />;
    }
    return <Component {...(props as P)} />;
  };
};

export default withAuth;
