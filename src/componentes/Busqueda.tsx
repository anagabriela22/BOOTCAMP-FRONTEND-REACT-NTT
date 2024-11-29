import { useContext } from "react";
import { contextoApp } from "../context/Contexto";

export const Busqueda = () => {
  const { state, dispatch } = useContext(contextoApp);

  const { productos } = state;

  const buscarPorTexto = (texto: string) => {
    const filtro = texto.toLowerCase();

    if (!filtro.trim()) {
      dispatch({
        type: "ESTABLECER_PRODUCTOS_FILTRADOS",
        payload: productos,
      });

      dispatch({
        type: "ESTABLECER_MODO_FILTRO",
        payload: false,
      });
      return;
    }
    dispatch({
      type: "ESTABLECER_MODO_FILTRO",
      payload: true,
    });

    let nuevosProductosFiltrados = productos.filter((producto) => {
      const titulo = producto.title.toLowerCase();
      const descripcion = producto.description?.toLowerCase() || "";
      const categoria = producto.category.toLowerCase();

      return (
        titulo.includes(filtro) ||
        descripcion.includes(filtro) ||
        categoria.includes(filtro)
      );
    });

    dispatch({
      type: "ESTABLECER_PRODUCTOS_FILTRADOS",
      payload: nuevosProductosFiltrados,
    });
  };

  return (
    <input
      id="caja-busqueda"
      className="seccionNavBarPage__navbar--inputBoton"
      type="text"
      aria-label="buscador"
      placeholder="Buscar..."
      onChange={(e) => {
        buscarPorTexto(e.target.value);
      }}
    />
  );
};
export default Busqueda;
