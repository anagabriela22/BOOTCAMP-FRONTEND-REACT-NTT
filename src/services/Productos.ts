import { Producto, ProductosResponse } from "../models/Producto.type";

export async function ObtenerProductos(): Promise<Producto[]> {
  // esta url podr'ia estar en una constante compartida y solo concatenar los valores que cambian, la otra opcion es investigar sobre variables de entorno.
  const url = "https://dummyjson.com/products?limit=0";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener los productos");
  }

  const json: ProductosResponse = await res.json();
  return json.products;
}
