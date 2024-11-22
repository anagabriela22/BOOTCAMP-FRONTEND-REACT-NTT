import { url_base } from "../../environment";
import { Producto, ProductosResponse } from "../models/Producto.type";

export async function obtenerProductos(): Promise<Producto[]> {

  const url = url_base + "/products?limit=0";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener los productos");
  }

  const json: ProductosResponse = await res.json();
  return json.products;
}
