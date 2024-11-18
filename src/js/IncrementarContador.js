export function IncrementarContador(element) {
  console.log(element.style.display);

  element.style.display = "flex";
  element.textContent = Number(element.textContent) + 1;
}
