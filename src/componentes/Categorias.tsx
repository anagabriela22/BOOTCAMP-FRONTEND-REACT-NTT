import { useContext, useEffect, useState } from "react";
import { obtenerCategorias } from "../services/Categorias";
import { contextoApp } from "../context/Contexto";

const Categorias = () => {
  const [categorias, setCategorias] = useState<string[]>([]);

  const { state, dispatch } = useContext(contextoApp);

  const { productos } = state;
  const categoriaTodos = "all";
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState(categoriaTodos);

  const filtrarPorCategoria = (categoria: string) => {
    if (categoria == categoriaTodos) {
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

    const nuevosProductosFiltrados = productos.filter(
      (producto) => producto.category === categoria
    );

    dispatch({
      type: "ESTABLECER_PRODUCTOS_FILTRADOS",
      payload: nuevosProductosFiltrados,
    });
  };

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const categoriasObtenidas = await obtenerCategorias();
        setCategorias(categoriasObtenidas);
      } catch (error) {
        dispatch({
          type: "ESTABLECER_ERROR_APP",
          payload: "Error al cargar categorías",
        });
      }
    };

    (async () => {
      await cargarCategorias();
    })();
  }, []);

  return (
    <select
      role="combobox"
      id="categorias"
      className="seccionNavBarPage__categorias"
      value={categoriaSeleccionada}
      onChange={(evento) => {
        let categoria = evento.target.value;
        setCategoriaSeleccionada(categoria);
        filtrarPorCategoria(categoria);
      }}
    >
      <option value="all">Categorías</option>
      {categorias.map((categoria) => (
        <option key={categoria} value={categoria}>
          {categoria}
        </option>
      ))}
    </select>
  );
};

export default Categorias;
