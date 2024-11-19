import { Producto, ProductosResponse } from "../models/Producto.type";

export async function ObtenerProductos(): Promise<Producto[]> {
  const url = "https://dummyjson.com/products?limit=0";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener los productos");
  }

  const json: ProductosResponse = await res.json();
  return json.products;
}
