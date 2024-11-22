import { url_base } from "../../environment";
import { Categoria } from "../models/Categoria.type";

export async function obtenerCategorias(): Promise<Categoria[]> {
  const url = url_base + "/products/category-list";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener las categorías");
  }

  const json: Categoria[] = await res.json();
  return json;
}
