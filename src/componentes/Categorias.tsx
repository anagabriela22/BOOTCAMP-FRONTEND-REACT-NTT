import { useContext, useEffect, useState } from "react";
import { obtenerCategorias } from "../services/Categorias";
import { contextoApp } from "../context/Contexto";

const Categorias = () => {
  const [categorias, setCategorias] = useState<string[]>([]);

  const { state, dispatch } = useContext(contextoApp);

  const { productos } = state;
  const categoriaTodos = "all";

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

    //Filtrar

    dispatch({
      type: "ESTABLECER_MODO_FILTRO",
      payload: true,
    });

    let nuevosProductosFiltrados = productos.filter(
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
        console.error("Error al cargar categorías:", error);
      }
    };

    (async () => {
      await cargarCategorias();
    })();
  }, []);

  return (
    <select
      id="categorias"
      className="seccionNavBarPage__categorias"
      onChange={(evento) => {
        let categoria = evento.target.value;

        filtrarPorCategoria(categoria);
      }}
    >
      <option selected value="all">
        Categorías
      </option>
      {categorias.map((categoria) => (
        <option key={categoria} value={categoria}>
          {categoria}
        </option>
      ))}
    </select>
  );
};

export default Categorias;
