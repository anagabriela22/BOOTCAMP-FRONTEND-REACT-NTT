import { Producto } from "../models/Producto.type";
export enum Disponibilidad {
  Disponible = "Disponible",
  Agotado = "Agotado",
}

export function mapProduct(producto: Producto) {
  return {
    id: producto.id,
    name: producto.title,
    price: producto.price,
    availabilityStatus:
      producto.stock > 0 ? Disponibilidad.Disponible : Disponibilidad.Agotado,
    thumbnail: producto.thumbnail,
    category: producto.category,
  };
}
