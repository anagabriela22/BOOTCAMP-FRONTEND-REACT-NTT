import { render, screen, within } from "@testing-library/react";
import ResumenOrden from "../../Carrito/ResumenOrden";
import { contextoApp } from "../../../context/Contexto";
import { Disponibilidad } from "../../../mappers/Producto.mapper";
import { EstadoApp } from "../../../context/Reducer";
import "@testing-library/jest-dom";

describe("ResumenOrden", () => {
  const mockDispatch = jest.fn();
  const mockState: EstadoApp = {
    categoria: "",
    usuario: null,
    productos: [],
    productosFiltrados: [],
    modoFiltro: false,
    carritoContador: 0,
    productosCarrito: [
      {
        producto: {
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
          availabilityStatus: Disponibilidad.Disponible,
        },
        cantidad: 2,
      },
    ],
    erorApp: null,
  };

  it("debe mostrar correctamente los valores del resumen", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <ResumenOrden />
      </contextoApp.Provider>
    );

    expect(screen.getByText("Resumen de la Orden")).toBeInTheDocument();

    const subtotalElement = screen.getByText("Subtotal").closest("div");
    expect(
      within(subtotalElement!).getByText(/S\/\s*100\.00/)
    ).toBeInTheDocument();

    expect(screen.getByText("Gastos de envío")).toBeInTheDocument();
    expect(screen.getByText("Gratis")).toBeInTheDocument();

    const totalElement = screen.getByText("Total").closest("div");
    expect(
      within(totalElement!).getByText(/S\/\s*100\.00/)
    ).toBeInTheDocument();
  });

  it("debe manejar un carrito vacío correctamente", () => {
    mockState.productosCarrito = [];

    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <ResumenOrden />
      </contextoApp.Provider>
    );

    const subtotalElement = screen.getByText("Subtotal").closest("div");
    expect(
      within(subtotalElement!).getByText(/S\/\s*0\.00/)
    ).toBeInTheDocument();

    const totalElement = screen.getByText("Total").closest("div");
    expect(within(totalElement!).getByText(/S\/\s*0\.00/)).toBeInTheDocument();
  });
});
