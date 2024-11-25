import { Producto } from "./Producto.type";

export interface ProductoCarrito {
  producto: Producto;
  cantidad: number;
}
