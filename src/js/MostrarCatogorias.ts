import { obtenerCategorias } from "../services/Categorias";

export async function mostrarCategorias(elemento: HTMLSelectElement) {
  const categorias = await obtenerCategorias();

  categorias.forEach((categoria) => {
    const opcion = document.createElement("option");
    opcion.value = categoria;
    opcion.textContent = categoria;
    elemento.appendChild(opcion);
  });
}
