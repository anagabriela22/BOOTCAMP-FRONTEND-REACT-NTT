// camel case
export function IncrementarContador(element) {
  // no console.log
  console.log(element.style.display);

  element.style.display = "flex";
  element.textContent = Number(element.textContent) + 1;
}
