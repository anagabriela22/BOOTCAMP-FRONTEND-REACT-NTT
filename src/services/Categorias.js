export async function obtenerCategorias() {
  const url = "https://dummyjson.com/products/category-list";

  const res = await fetch(url);
  const json = await res.json();

  return json;
}
