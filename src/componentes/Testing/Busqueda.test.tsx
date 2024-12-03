import { render, screen, fireEvent } from "@testing-library/react";
import { contextoApp } from "../../context/Contexto";
import { Busqueda } from "../Busqueda";
import "@testing-library/jest-dom";
import { EstadoApp } from "../../context/Reducer";

const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

describe("Componente Busqueda", () => {
  const mockDispatch = jest.fn();
  const mockState: EstadoApp = {
    productos: [
      {
        id: 1,
        title: "Perfume Elegante",
        description: "Un aroma sofisticado",
        price: 50,
        discountPercentage: 10,
        rating: 4.5,
        stock: 100,
        brand: "Marca A",
        category: "Fragancias",
        thumbnail: "",
        images: ["image1.jpg"],
        availabilityStatus: "",
      },
    ],
    productosFiltrados: [],
    modoFiltro: false,
    carritoContador: 0,
    productosCarrito: [],
    erorApp: null,
    categoria: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    localStorage.setItem("estadoApp", JSON.stringify(mockState));
  });

  const renderBusqueda = () => {
    render(
      <contextoApp.Provider
        value={{
          state: mockState,
          dispatch: mockDispatch,
        }}
      >
        <Busqueda />
      </contextoApp.Provider>
    );
  };

  it("debería renderizarse correctamente", () => {
    renderBusqueda();

    const input = screen.getByPlaceholderText("Buscar...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveClass("seccionNavBarPage__navbar--inputBoton");
  });

  it("debería filtrar productos al escribir en la caja de búsqueda", () => {
    renderBusqueda();

    const input = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(input, { target: { value: "Perfume Elegante" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_MODO_FILTRO",
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_PRODUCTOS_FILTRADOS",
      payload: mockState.productos,
    });
  });

  it("deberia manejar correctamente texto que no coincida con ningun producto", () => {
    renderBusqueda();

    const input = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(input, { target: { value: "inexistente" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_MODO_FILTRO",
      payload: true,
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_PRODUCTOS_FILTRADOS",
      payload: [],
    });
  });
});
