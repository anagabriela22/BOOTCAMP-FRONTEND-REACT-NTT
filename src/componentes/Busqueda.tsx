import { useContext } from "react";
import { contextoApp } from "../context/Contexto";

export const Busqueda = () => {
  const {
    establecerProductosFiltrados,
    productos,
    establecerModoFiltro,
    productosFiltrados,
  } = useContext(contextoApp);

  const buscarPorTexto = (texto: string) => {
    const filtro = texto.toLowerCase();

    if (!filtro.trim()) {
      establecerProductosFiltrados(productos);
      establecerModoFiltro(false);
      return;
    }
    //Filtrar

    establecerModoFiltro(true);
    establecerProductosFiltrados(
      productos.filter((producto) => {
        const titulo = producto.title.toLowerCase();
        const descripcion = producto.description?.toLowerCase() || "";
        const categoria = producto.category.toLowerCase();

        return (
          titulo.includes(filtro) ||
          descripcion.includes(filtro) ||
          categoria.includes(filtro)
        );
      })
    );
  };

  return (
    <input
      id="caja-busqueda"
      className="seccionNavBarPage__navbar--inputBoton"
      type="text"
      placeholder="Buscar..."
      onChange={(e) => {
        buscarPorTexto(e.target.value);
      }}
    />
  );
};
export default Busqueda;
