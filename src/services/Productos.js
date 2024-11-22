export async function obtenerProductos() {
  const url = "https://dummyjson.com/products?limit=0";

  const res = await fetch(url);
  const json = await res.json();

  return json.products;
}
