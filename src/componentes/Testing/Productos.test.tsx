import { render, screen, waitFor } from "@testing-library/react";
import Productos from "../Productos";
import { contextoApp } from "../../context/Contexto";
import { EstadoApp } from "../../context/Reducer";
import "@testing-library/jest-dom";

describe("Productos", () => {
  const mockDispatch = jest.fn();

  const mockState: EstadoApp = {
    categoria: "",
    productos: [],
    productosFiltrados: [
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
    modoFiltro: false,
    carritoContador: 0,
    productosCarrito: [],
    erorApp: null,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderProductos = async () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <Productos />
      </contextoApp.Provider>
    );
  };

  it("debe renderizar los productos correctamente", async () => {
    renderProductos();

    expect(screen.getByText("Perfume Elegante")).toBeInTheDocument();
  });

  it("no mostrar paginacion si solo hay una pagina", async () => {
    mockState.productosFiltrados = [];
    renderProductos();

    const botonPagina2 = screen.queryByRole("button", { name: "2" });
    expect(botonPagina2).not.toBeInTheDocument();
  });
});
