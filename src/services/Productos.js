export async function ObtenerProductos() {
  const url = "https://dummyjson.com/products?limit=0";

  // igual aquí no usemos coma
  const res = await fetch(url),
    json = await res.json();

  return json.products;
}
