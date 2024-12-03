import { render, screen, fireEvent } from "@testing-library/react";
import NavUser from "./../NavUser";
import { contextoApp } from "../../context/Contexto";
import { BrowserRouter } from "react-router-dom";
import { EstadoApp } from "../../context/Reducer";
import "@testing-library/jest-dom";
import { AuthContext, AuthProvider } from "../../context/AuthContexto";
import { UsuarioApi } from "../../models/UsuarioApi.type";

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
describe("NavUser", () => {
  test("Renderiza los datos del usuario", () => {
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
            <NavUser />
          </AuthContext.Provider>
        </contextoApp.Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button"));

    // Verificar que la inicial del usuario se muestre
    expect(screen.getByText("Mi Cuenta")).toBeInTheDocument();
    expect(screen.getByText(`¡BIENVENIDO EMILYS!`)).toBeInTheDocument();
  });
});
