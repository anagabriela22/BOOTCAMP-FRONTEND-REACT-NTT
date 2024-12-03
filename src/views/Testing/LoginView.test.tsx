import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginView from "../LoginView";
import { contextoApp } from "../../context/Contexto";
import { BrowserRouter } from "react-router-dom";
import { EstadoApp } from "../../context/Reducer";
import "@testing-library/jest-dom";
import { AuthContext } from "../../context/AuthContexto";
import { UsuarioApi } from "../../models/UsuarioApi.type";
// Mock de las dependencias
jest.mock("../../services/Auth");
jest.mock("sweetalert2");

const mockState: EstadoApp = {
  categoria: "",

  productos: [],
  productosFiltrados: [],
  modoFiltro: false,
  carritoContador: 0,
  productosCarrito: [],
  erorApp: null,
};

const mockDispatch = jest.fn();
const mockUsuarioAuth: UsuarioApi = {
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzMxOTU0NzMsImV4cCI6MTczMzE5OTA3M30.GUOh1_VQHhMgWLxM3sHjWzLsxqxnGV79ZGkxlPyKmFo",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3MzMxOTU0NzMsImV4cCI6MTczNTc4NzQ3M30.wryQOYk-X-B0cr7CEYM39T6Jy4UMtRkmuSZMdbwDgEM",
  id: 1,
  username: "emilys",
  email: "emily.johnson@x.dummyjson.com",
  firstName: "Emily",
  lastName: "Johnson",
  gender: "female",
  image: "https://dummyjson.com/icon/emilys/128",
};
const mockSetUsuarioAuth = jest.fn();
describe("LoginView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLogin = () => {
    render(
      <BrowserRouter>
        <contextoApp.Provider
          value={{ state: mockState, dispatch: mockDispatch }}
        >
          <AuthContext.Provider
            value={{
              usuarioAuth: mockUsuarioAuth,
              setUsuarioAuth: mockSetUsuarioAuth,
            }}
          >
            <LoginView />
          </AuthContext.Provider>
        </contextoApp.Provider>
      </BrowserRouter>
    );
  };

  test("Renderiza el formulario de inicio de sesión", () => {
    renderLogin();

    expect(screen.getByText("Inicia sesión")).toBeInTheDocument();
    expect(screen.getByLabelText(/Usuario/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/Acepto las/i)).toBeInTheDocument();
    expect(
      screen.getByText(/políticas de uso de datos personales/i)
    ).toBeInTheDocument();
  });

  test("Abre el modal para recuperar contraseña al hacer clic en el enlace", () => {
    renderLogin();

    expect(screen.queryByText(/Ingresa tu correo/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i));

    expect(screen.getByText(/Ingresa tu correo/i)).toBeInTheDocument();
  });

  test("Cierra el modal al hacer clic en el botón de cerrar", () => {
    renderLogin();

    fireEvent.click(screen.getByText(/Olvidé mi contraseña/i));

    expect(screen.getByText(/Ingresa tu correo/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText("×"));

    expect(screen.queryByText(/Ingresa tu correo/i)).not.toBeInTheDocument();
  });
});
