import { ObtenerCategorias } from "../services/Categorias";

export async function MostrarCategorias(element) {
  const categorias = await ObtenerCategorias();

  categorias.forEach((categoria) => {
    const option = document.createElement("option");
    option.value = categoria;
    option.textContent = categoria;
    element.appendChild(option);
  });
}
