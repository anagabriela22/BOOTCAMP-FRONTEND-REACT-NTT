export function incrementarContador(elemento: HTMLElement): void {
  elemento.style.display = "flex";
  const cuentaActual = Number(elemento.textContent);
  if (!isNaN(cuentaActual)) {
    elemento.textContent = (cuentaActual + 1).toString();
  } else {
    console.error("El contenido del elemento no es un numero válido.");
  }
}
