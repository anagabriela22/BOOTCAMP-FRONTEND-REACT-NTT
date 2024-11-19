import { Categoria } from "../models/Categoria.type";

export async function ObtenerCategorias(): Promise<Categoria[]> {
  const url = "https://dummyjson.com/products/category-list";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener las categorías");
  }

  const json: Categoria[] = await res.json();
  return json;
}
