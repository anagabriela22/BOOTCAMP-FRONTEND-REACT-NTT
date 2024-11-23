import { useContext, useEffect, useState } from "react";
import { obtenerCategorias } from "../services/Categorias";
import { contextoApp } from "../context/Contexto";

const Categorias = () => {
  const [categorias, setCategorias] = useState<string[]>([]);

  const {
    productosFiltrados,
    productos,
    establecerProductosFiltrados,
    establecerModoFiltro,
  } = useContext(contextoApp);

  const categoriaTodos = "all";

  const filtrarPorCategoria = (categoria: string) => {
    if (categoria == categoriaTodos) {
      establecerProductosFiltrados(productos);
      establecerModoFiltro(false);

      //paginacion.style.display = "flex";
      //Mostrar paginacion
      //Ocultar si hay mensaje error
      return;
    }

    establecerModoFiltro(true);

    establecerProductosFiltrados(
      productos.filter((producto) => producto.category === categoria)
    );

    //paginacion.style.display = "none";
    //ocultamos paginacion

    if (productosFiltrados.length > 0) {
      //Ocultar si hay mensaje error
    } else {
      //Mostrar si hay mensaje error (SIN COINCIDENCIAS)
    }
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
