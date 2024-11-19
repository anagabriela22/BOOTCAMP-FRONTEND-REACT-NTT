import { Producto } from "../models/Producto.type";

export function mapProduct(product: Producto) {
  return {
    id: product.id,
    name: product.title,
    price: product.price,
    availabilityStatus: product.stock > 0 ? "Disponible" : "Agotado",
    thumbnail: product.thumbnail,
    category: product.category,
  };
}
