import { render, screen } from "@testing-library/react";
import ErrorApp from "../ErrorApp";
import { contextoApp } from "../../context/Contexto";
import { EstadoApp } from "../../context/Reducer";
import "@testing-library/jest-dom";

describe("Componente ErrorApp", () => {
  const mockDispatch = jest.fn();
  const mockState: EstadoApp = {
    categoria: "",
    usuario: null,
    productos: [],
    productosFiltrados: [],
    modoFiltro: false,
    carritoContador: 0,
    productosCarrito: [],
    erorApp: null,
  };

  it("debería mostrar el mensaje de error si erorApp tiene un valor", () => {
    mockState.erorApp = "Error al cargar categorías";
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <ErrorApp />
      </contextoApp.Provider>
    );

    expect(screen.getByText("Error al cargar categorías")).toBeInTheDocument();
  });

  it("no debería renderizar nada si erorApp es null", () => {
    mockState.erorApp = null;
    const { container } = render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <ErrorApp />
      </contextoApp.Provider>
    );

    expect(container.firstChild).toBeNull();
  });
});
