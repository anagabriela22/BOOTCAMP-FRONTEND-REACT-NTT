import { ObtenerCategorias } from "../services/Categorias";

// camel case
export async function MostrarCategorias(element) {
  const categorias = await ObtenerCategorias();

  categorias.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    element.appendChild(option);
  });
}
