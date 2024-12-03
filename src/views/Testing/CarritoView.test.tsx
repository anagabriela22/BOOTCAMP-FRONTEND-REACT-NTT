import { render, screen } from "@testing-library/react";
import CarritoView from "../CarritoView";
import { MemoryRouter } from "react-router-dom";
import { contextoApp } from "../../context/Contexto";
import { Disponibilidad } from "../../mappers/Producto.mapper";
import { EstadoApp } from "../../context/Reducer";
import "@testing-library/jest-dom";
import { useDistritos } from "../../hooks/useDistritos";

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
      availabilityStatus: Disponibilidad.Disponible,
    },
  ],
  modoFiltro: false,
  carritoContador: 0,
  productosCarrito: [],
  erorApp: null,
};

const mockDispatch = jest.fn();
jest.mock("../../hooks/useDistritos", () => ({
  useDistritos: jest.fn(),
}));
const mockDistritos = [
  { id: "1", nombre: "Distrito 1" },
  { id: "2", nombre: "Distrito 2" },
];

describe("CarritoView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCarritoView = () => {
    (useDistritos as jest.Mock).mockReturnValue(mockDistritos);

    render(
      <MemoryRouter>
        <contextoApp.Provider
          value={{
            state: mockState,
            dispatch: mockDispatch,
          }}
        >
          <CarritoView />
        </contextoApp.Provider>
      </MemoryRouter>
    );
  };

  it("debe renderizar correctamente la vista y sus componentes", () => {
    renderCarritoView();

    expect(screen.getByText("Mi Carrito")).toBeInTheDocument();

    //Verifica que la navegacion se renderice
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    //Verifica que los productos del carrito se rendericen
    expect(screen.getByRole("table")).toBeInTheDocument();
    //Verifica que el cuadro resumen se renderice
    expect(screen.getByTestId("resumen-orden")).toBeInTheDocument();
    //Verifica que el formulario de compra se renderice
    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("debe ocultar los controles y contactos en Navegacion", () => {
    renderCarritoView();

    //Verifica que la navegacion se renderice
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    //No debe renderizar los contactos ni controles
    expect(screen.queryByTestId("contactos")).not.toBeInTheDocument();
    expect(screen.queryByTestId("controles")).not.toBeInTheDocument();
  });

  it("debe renderizar el boton 'Seguir comprando'", () => {
    renderCarritoView();
    expect(
      screen.getByRole("button", { name: "Seguir comprando" })
    ).toBeInTheDocument();
  });

  it("debe renderizar el componente FormularioEnvio", () => {
    renderCarritoView();

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("debe renderizar el componente ResumenOrden", () => {
    renderCarritoView();

    expect(screen.getByTestId("resumen-orden")).toBeInTheDocument();
  });

  it("debe renderizar el componente TablaProductos", () => {
    renderCarritoView();

    expect(screen.getByRole("table")).toBeInTheDocument();
  });
});
