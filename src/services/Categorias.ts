import { url_base } from "../environment";

export async function obtenerCategorias(): Promise<string[]> {
  const url = url_base + "/products/category-list";

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error al obtener las categorías");
  }

  const json: string[] = await res.json();
  return json;
}
