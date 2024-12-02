import { render, screen, fireEvent } from "@testing-library/react";
import NavUser from "./../NavUser";
import { contextoApp } from "../../context/Contexto";
import { BrowserRouter } from "react-router-dom";
import { EstadoApp } from "../../context/Reducer";
import { convertirAMayuscula } from "../../utils/CadenasTxt";
import "@testing-library/jest-dom";

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

describe("NavUser", () => {
  test("Renderiza los datos del usuario", () => {
    render(
      <BrowserRouter>
        <contextoApp.Provider
          value={{ state: mockState, dispatch: mockDispatch }}
        >
          <NavUser />
        </contextoApp.Provider>
      </BrowserRouter>
    );
    fireEvent.click(screen.getByRole("button"));

    // Verificar que la inicial del usuario se muestre
    expect(screen.getByText("Mi Cuenta")).toBeInTheDocument();
    expect(screen.getByText(`¡BIENVENIDO EMILYS!`)).toBeInTheDocument();
  });
});
