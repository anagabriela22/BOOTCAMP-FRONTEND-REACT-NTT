import React, { createContext, useState, ReactNode } from "react";
import { Producto } from "../models/Producto.type";

// Define la estructura del estado del carrito
export interface ContextoProps {
  carritoContador: number;
  incrementarCarritoContador: () => void;

  productos: Producto[];
  establecerProductos: React.Dispatch<React.SetStateAction<Producto[]>>;

  productosFiltrados: Producto[];
  establecerProductosFiltrados: React.Dispatch<
    React.SetStateAction<Producto[]>
  >;

  modoFiltro: Boolean;
  establecerModoFiltro: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const contextoApp = createContext<ContextoProps>({
  carritoContador: 0,
  incrementarCarritoContador() {},

  productos: [],
  establecerProductos() {},

  productosFiltrados: [],
  establecerProductosFiltrados() {},

  modoFiltro: false,
  establecerModoFiltro() {},
});

// Proveedor del contexto
export const ContextoProveedor: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [carritoContador, setCarritoContador] = useState<number>(0);
  const [productos, setProductos] = useState<Producto[]>([]);
  const [productosFiltrados, setProductosFiltrados] = useState<Producto[]>([]);
  const [modoFiltro, setModoFiltro] = useState<Boolean>(false);

  const incrementarCarritoContador = () => {
    setCarritoContador((prev) => prev + 1);
  };

  return (
    <contextoApp.Provider
      value={{
        carritoContador: carritoContador,
        incrementarCarritoContador: incrementarCarritoContador,
        productos: productos,
        establecerProductos: setProductos,
        productosFiltrados: productosFiltrados,
        establecerProductosFiltrados: setProductosFiltrados,
        modoFiltro: modoFiltro,
        establecerModoFiltro: setModoFiltro,
      }}
    >
      {children}
    </contextoApp.Provider>
  );
};
