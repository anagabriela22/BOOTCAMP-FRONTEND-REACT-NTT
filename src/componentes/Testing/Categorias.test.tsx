import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { contextoApp } from "../../context/Contexto";
import { obtenerCategorias } from "../../services/Categorias";
import Categorias from "../Categorias";
import "@testing-library/jest-dom";
import ErrorApp from "../ErrorApp";

jest.mock("../../services/Categorias", () => ({
  obtenerCategorias: jest.fn(),
}));

const categoriasMock = ["Ropa", "Electrónica", "Deportes", "Fragancias"];

describe("Componente Categorias", () => {
  const mockDispatch = jest.fn();

  const mockState = {
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
    carritoContador: 1,
    productosCarrito: [],
    productosFiltrados: [],
    modoFiltro: false,
    erorApp: "Error al cargar categorías",
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCategorias = async () => {
    (obtenerCategorias as jest.Mock).mockResolvedValue(categoriasMock);

    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <Categorias />
      </contextoApp.Provider>
    );

    await waitFor(() => expect(obtenerCategorias).toHaveBeenCalled());
  };

  it("debería cargar y mostrar las categorías en el select", async () => {
    await renderCategorias();

    expect(screen.getByText("Ropa")).toBeInTheDocument();
    expect(screen.getByText("Electrónica")).toBeInTheDocument();
  });

  it("debería filtrar productos por categoría", async () => {
    await renderCategorias();

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "Fragancias" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_MODO_FILTRO",
      payload: true,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_PRODUCTOS_FILTRADOS",
      payload: mockState.productos,
    });
  });

  it("debería mostrar todos los productos al seleccionar 'all'", async () => {
    await renderCategorias();

    const select = screen.getByRole("combobox");

    fireEvent.change(select, { target: { value: "all" } });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_MODO_FILTRO",
      payload: false,
    });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_PRODUCTOS_FILTRADOS",
      payload: mockState.productos,
    });
  });

  it("debería manejar errores al cargar las categorías", async () => {
    (obtenerCategorias as jest.Mock).mockRejectedValue(
      "Error al cargar categorías"
    );

    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <Categorias />
        <ErrorApp />
      </contextoApp.Provider>
    );

    await waitFor(() =>
      expect(screen.getByText("Error al cargar categorías")).toBeInTheDocument()
    );

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ESTABLECER_ERROR_APP",
      payload: "Error al cargar categorías",
    });
  });
});
