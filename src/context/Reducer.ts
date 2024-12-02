import { Producto } from "../models/Producto.type";
import { ProductoCarrito } from "../models/ProductoCarrito.type";
import { UsuarioApi } from "../models/UsuarioApi.type";

export type EstadoApp = {
  carritoContador: number;
  productos: Producto[];
  productosFiltrados: Producto[];
  modoFiltro: boolean;
  productosCarrito: ProductoCarrito[];
  erorApp: String | null;
  categoria: string;
  usuario: UsuarioApi | null;
};

export const estadoInicial: EstadoApp = {
  carritoContador: 0,
  productos: [],
  productosFiltrados: [],
  modoFiltro: false,
  productosCarrito: [],
  erorApp: null,
  categoria: "all",
  usuario: null,
};

export type Accion =
  | { type: "INCREMENTAR_CARRITO_CONTADOR" }
  | { type: "ESTABLECER_PRODUCTOS"; payload: Producto[] }
  | { type: "ESTABLECER_PRODUCTOS_FILTRADOS"; payload: Producto[] }
  | { type: "ESTABLECER_MODO_FILTRO"; payload: boolean }
  | { type: "AGREGAR_AL_CARRITO"; payload: ProductoCarrito }
  | { type: "ELIMINAR_DEL_CARRITO"; payload: number }
  | { type: "ACTUALIZAR_CANTIDAD"; payload: { id: number; cantidad: number } }
  | { type: "VACIAR_CARRITO" }
  | { type: "ESTABLECER_ERROR_APP"; payload: String | null }
  | { type: "ESTABLECER_USUARIO"; payload: UsuarioApi | null }
  | { type: "ESTABLECER_CATEGORIA"; payload: string };

export const reducer = (state: EstadoApp, action: Accion): EstadoApp => {
  switch (action.type) {
    case "INCREMENTAR_CARRITO_CONTADOR":
      return { ...state, carritoContador: state.carritoContador + 1 };

    case "ESTABLECER_PRODUCTOS":
      return { ...state, productos: action.payload };

    case "ESTABLECER_PRODUCTOS_FILTRADOS":
      return { ...state, productosFiltrados: action.payload };

    case "ESTABLECER_MODO_FILTRO":
      return { ...state, modoFiltro: action.payload };

    case "AGREGAR_AL_CARRITO": {
      const productoExistente = state.productosCarrito.find(
        ({ producto }) => producto.id === action.payload.producto.id
      );

      if (productoExistente) {
        return {
          ...state,
          productosCarrito: state.productosCarrito.map((producto) =>
            producto.producto.id === action.payload.producto.id
              ? {
                  ...producto,
                  cantidad: producto.cantidad + action.payload.cantidad,
                }
              : producto
          ),
        };
      }

      return {
        ...state,
        productosCarrito: [...state.productosCarrito, action.payload],
      };
    }

    case "ELIMINAR_DEL_CARRITO":
      return {
        ...state,
        productosCarrito: state.productosCarrito.filter(
          (p) => p.producto.id !== action.payload
        ),
      };

    case "ACTUALIZAR_CANTIDAD":
      return {
        ...state,
        productosCarrito: state.productosCarrito.map((producto) =>
          producto.producto.id === action.payload.id
            ? { ...producto, cantidad: action.payload.cantidad }
            : producto
        ),
      };

    case "VACIAR_CARRITO":
      return {
        ...state,
        productosCarrito: [],
      };
    case "ESTABLECER_ERROR_APP":
      return { ...state, erorApp: action.payload };
    case "ESTABLECER_USUARIO":
      return { ...state, usuario: action.payload };
    case "ESTABLECER_CATEGORIA":
      return { ...state, categoria: action.payload };
    default:
      return state;
  }
};
