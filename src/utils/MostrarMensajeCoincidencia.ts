export function monstrarMensajeSinCoincidencias(contenedor: HTMLElement, ocultarProductos : boolean = false): void {
  let mensaje = document.querySelector<HTMLParagraphElement>(
    "#mensaje-sin-coincidencias"
  );

  // Crea el mensaje si no existe
  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.id = "mensaje-sin-coincidencias";
    mensaje.textContent = "No se encontraron productos.";
    mensaje.style.color = "red";
    mensaje.style.textAlign = "center";
    mensaje.style.marginTop = "20px";

    if (contenedor.parentElement) {
      contenedor.parentElement.appendChild(mensaje);
    } else {
      console.error(
        "No se encontro el contenedor padre para mostrar el mensaje."
      );
    }
  }
  if(ocultarProductos){
      Array.from(contenedor.children).forEach((producto) => {
        (producto as HTMLElement).style.display = "none";
      });

  }
}
  
export function ocultarMensajeSinCoincidencias(contenedor: HTMLElement, ocultarProductos : boolean = false): void {
  const mensaje = document.querySelector("#mensaje-sin-coincidencias");

  if (mensaje) {
    mensaje.remove();
  }

  if(ocultarProductos){
      
    Array.from(contenedor.children).forEach((producto) => {
      (producto as HTMLElement).style.display = "";
    });

  }
}
  