import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { contextoApp } from "../../context/Contexto";
import Carrito from "../Carrito";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Componente Carrito", () => {
  const mockDispatch = jest.fn();

  const mockState = {
    productosFiltrados: [],
    modoFiltro: false,
    carritoContador: 1,
    productos: [],
    erorApp: null,
    productosCarrito: [
      {
        cantidad: 3,
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
          availabilityStatus: "",
        },
      },
    ],
  };

  const renderCarrito = (state = mockState) => {
    render(
      <contextoApp.Provider
        value={{
          state,
          dispatch: mockDispatch,
        }}
      >
        <BrowserRouter>
          <Carrito />
        </BrowserRouter>
      </contextoApp.Provider>
    );
  };

  it("debería mostrar el número correcto de productos en el carrito", () => {
    renderCarrito();

    const contadorCarrito = screen.getByText("1");
    expect(contadorCarrito).toBeInTheDocument();
  });

  it("debería navegar a /resumen al hacer clic en el carrito", () => {
    renderCarrito();

    const carritoIcono = screen.getByTestId("carrito-icono");

    fireEvent.click(carritoIcono);

    expect(mockNavigate).toHaveBeenCalledWith("/resumen");
  });

  it("no debería mostrar el contador si el carrito está vacío", () => {
    renderCarrito({ ...mockState, productosCarrito: [] });
    // que hace el regex?
    const contadorCarrito = screen.queryByText(/\d+/);
    // no se evaluan estilos no tiene ning'un valor agregado
    expect(contadorCarrito).toHaveStyle("display: none");
  });
});
