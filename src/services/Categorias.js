export async function ObtenerCategorias() {
  const url = "https://dummyjson.com/products/category-list";

  const res = await fetch(url),
    json = await res.json();

  return json;
}
