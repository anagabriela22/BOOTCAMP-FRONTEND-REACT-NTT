export async function ObtenerProductos() {
  const url = "https://dummyjson.com/products?limit=0";

  const res = await fetch(url),
    json = await res.json();

  return json.products;
}
