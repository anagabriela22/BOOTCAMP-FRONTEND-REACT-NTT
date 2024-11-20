export async function ObtenerCategorias() {
  const url = "https://dummyjson.com/products/category-list";

  // separemoslo en diferentes líneas no usemos coma
  const res = await fetch(url),
    json = await res.json();

  return json;
}
