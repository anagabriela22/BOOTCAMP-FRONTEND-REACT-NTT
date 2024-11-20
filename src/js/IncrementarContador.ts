export function IncrementarContador(element: HTMLElement): void {
  element.style.display = "flex";
  const currentCount = Number(element.textContent);
  if (!isNaN(currentCount)) {
    element.textContent = (currentCount + 1).toString();
  } else {
    console.error("El contenido del elemento no es un numero válido.");
  }
}
