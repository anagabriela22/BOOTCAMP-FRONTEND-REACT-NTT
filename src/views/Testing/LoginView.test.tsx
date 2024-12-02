import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginView from "../LoginView";
import { contextoApp } from "../../context/Contexto";
import { BrowserRouter } from "react-router-dom";
import { EstadoApp } from "../../context/Reducer";
import "@testing-library/jest-dom";
// Mock de las dependencias
jest.mock("../../services/Auth");
jest.mock("sweetalert2");

const mockState: EstadoApp = {
  categoria: "",
  usuario: {
    accessToken: "",
    refreshToken: "",
    id: 1,
    username: "emilys",
    email: "emily.johnson@x.dummyjson.com",
    firstName: "Emily",
    lastName: "Johnson",
    gender: "female",
    image: "https://dummyjson.com/icon/emilys/128",
  },
  productos: [],
  productosFiltrados: [],
  modoFiltro: false,
  carritoContador: 0,
  productosCarrito: [],
  erorApp: null,
};

const mockDispatch = jest.fn();

describe("LoginView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Renderiza el formulario de inicio de sesión", () => {
    render(
      <BrowserRouter>
        <contextoApp.Provider
          value={{ state: mockState, dispatch: mockDispatch }}
        >
          <LoginView />
        </contextoApp.Provider>
      </BrowserRouter>
    );

    expect(screen.getByText("Inicia sesión")).toBeInTheDocument();
    expect(screen.getByLabelText(/Usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/Acepto las/i)).toBeInTheDocument();
    expect(
      screen.getByText(/políticas de uso de datos personales/i)
    ).toBeInTheDocument();
  });

  test("Abre el modal para recuperar contraseña al hacer clic en el enlace", () => {
    render(
      <BrowserRouter>
        <contextoApp.Provider
          value={{ state: mockState, dispatch: mockDispatch }}
        >
          <LoginView />
        </contextoApp.Provider>
      </BrowserRouter>
    );

    expect(screen.queryByText(/Ingresa tu correo/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i));

    expect(screen.getByText(/Ingresa tu correo/i)).toBeInTheDocument();
  });

  test("Cierra el modal al hacer clic en el botón de cerrar", () => {
    render(
      <BrowserRouter>
        <contextoApp.Provider
          value={{ state: mockState, dispatch: mockDispatch }}
        >
          <LoginView />
        </contextoApp.Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i));

    expect(screen.getByText(/Ingresa tu correo/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText("×"));

    expect(screen.queryByText(/Ingresa tu correo/i)).not.toBeInTheDocument();
  });
});
