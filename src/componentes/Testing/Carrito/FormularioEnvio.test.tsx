import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { contextoApp } from "../../../context/Contexto";
import FormularioEnvio from "../../Carrito/FormularioEnvio";
import { useDistritos } from "../../../hooks/useDistritos";
import { Disponibilidad } from "../../../mappers/Producto.mapper";
import { EstadoApp } from "../../../context/Reducer";
import "@testing-library/jest-dom";

jest.mock("../../../hooks/useDistritos", () => ({
  useDistritos: jest.fn(),
}));

jest.mock("sweetalert2", () => ({
  fire: jest.fn(() => Promise.resolve({ isConfirmed: true })),
}));

const mockDispatch = jest.fn();

const mockDistritos = [
  { id: "1", nombre: "Distrito 1" },
  { id: "2", nombre: "Distrito 2" },
];

const mockState: EstadoApp = {
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

describe("FormularioEnvio", () => {
  beforeEach(() => {
    (useDistritos as jest.Mock).mockReturnValue(mockDistritos);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debe renderizar el formulario correctamente", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <Router>
          <FormularioEnvio />
        </Router>
      </contextoApp.Provider>
    );

    expect(
      screen.getByPlaceholderText("Ingresa tus nombres")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Ingresa tus apellidos")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Ingresa tu dirección")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Referencia de tu dirección")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Ingresa tu número de celular")
    ).toBeInTheDocument();
    expect(screen.getByText("Selecciona tu distrito")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /comprar/i })
    ).toBeInTheDocument();
  });

  it("debe mostrar errores de validación si los campos están vacíos", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <Router>
          <FormularioEnvio />
        </Router>
      </contextoApp.Provider>
    );

    fireEvent.click(screen.getByRole("button", { name: /comprar/i }));

    expect(
      screen.getByText("Debe ingresar un nombre valido")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Debe seleccionar un distrito")
    ).toBeInTheDocument();
    expect(screen.getAllByText("Campo obligatorio").length).toBeGreaterThan(0);
  });

  it("debe permitir el envío del formulario si todos los campos son válidos y vaciar esl carrito", async () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <Router>
          <FormularioEnvio />
        </Router>
      </contextoApp.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Ingresa tus nombres"), {
      target: { value: "Ana" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ingresa tus apellidos"), {
      target: { value: "Perez" },
    });
    fireEvent.change(screen.getByPlaceholderText("Ingresa tu dirección"), {
      target: { value: "Av. Siempre Viva 123" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Referencia de tu dirección"),
      {
        target: { value: "Frente a la tienda" },
      }
    );
    fireEvent.change(
      screen.getByPlaceholderText("Ingresa tu número de celular"),
      {
        target: { value: "987654321" },
      }
    );
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "1" },
    });

    const button = screen.getByRole("button", { name: /comprar/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({ type: "VACIAR_CARRITO" });
    });

    expect(mockDispatch).toHaveBeenCalledWith({ type: "VACIAR_CARRITO" });
  });
});
