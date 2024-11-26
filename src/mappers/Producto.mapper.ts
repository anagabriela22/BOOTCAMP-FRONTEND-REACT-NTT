import { Producto } from "../models/Producto.type";
enum Disponibilidad {
  Disponible = "Disponible",
  Agotado = "Agotado",
}

// agreguemos el tipo de retorno para que no sea implicito
export function mapProduct(producto: Producto): MyType {
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
