
export function monstrarMensajeSinCoincidencias(contenedor, ocultarProductos = false) {
    let mensaje = document.querySelector("#mensaje-sin-coincidencias");
  
    // Crea el mensaje si no existe
    if (!mensaje) {
      mensaje = document.createElement("p");
      mensaje.id = "mensaje-sin-coincidencias";
      mensaje.textContent = "No se encontraron productos.";
      mensaje.style.color = "red";
      mensaje.style.textAlign = "center";
      mensaje.style.marginTop = "20px";
      contenedor.parentElement.appendChild(mensaje);
    }
  
    if(ocultarProductos){
        Array.from(contenedor.children).forEach((producto) => {
          producto.style.display = "none";
        });
    }
  }
  
export function ocultarMensajeSinCoincidencias(contenedor, ocultarProductos = false) {
    const mensaje = document.querySelector("#mensaje-sin-coincidencias");

    if (mensaje) {
        mensaje.remove();
    }

    if(ocultarProductos){
        Array.from(contenedor.children).forEach((producto) => {
            producto.style.display = "";
        });
    }

}
  