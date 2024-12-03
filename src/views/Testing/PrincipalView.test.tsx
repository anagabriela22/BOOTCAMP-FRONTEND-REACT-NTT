import { render, screen } from "@testing-library/react";
import PrincipalView from "../PrincipalView";
import { funcionalidadScroll } from "../../utils/FuncionalidadScroll";
import { disenoResponsivo } from "../../utils/DisenoResponsivo";

import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { EstadoApp } from "../../context/Reducer";
import { Disponibilidad } from "../../mappers/Producto.mapper";
import { contextoApp } from "../../context/Contexto";

export const mockFuncionalidadScroll = jest.fn();
export const mockDisenoResponsivo = jest.fn();
import { act } from "react";

import { obtenerCategorias } from "../../services/Categorias";
import { obtenerProductos } from "../../services/Productos";
import { UsuarioApi } from "../../models/UsuarioApi.type";
import { AuthContext } from "../../context/AuthContexto";

jest.mock("../../utils/FuncionalidadScroll", () => ({
  funcionalidadScroll: jest.fn(),
}));

jest.mock("../../utils/DisenoResponsivo", () => ({
  disenoResponsivo: jest.fn(),
}));

jest.mock("../../services/Categorias", () => ({
  obtenerCategorias: jest.fn(),
}));

const categoriasMock = ["Ropa", "Electrónica", "Deportes", "Fragancias"];

jest.mock("../../services/Productos", () => ({
  obtenerProductos: jest.fn(),
}));

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
describe("PrincipalView", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderPrincipalView = async () => {
    (obtenerCategorias as jest.Mock).mockResolvedValue(categoriasMock);
    (obtenerProductos as jest.Mock).mockResolvedValue(
      mockState.productosFiltrados
    );
    await act(async () => {
      render(
        <MemoryRouter>
          <contextoApp.Provider
            value={{
              state: mockState,
              dispatch: mockDispatch,
            }}
          >
            <AuthContext.Provider
              value={{
                usuarioAuth: mockUsuarioAuth,
                setUsuarioAuth: mockSetUsuarioAuth,
              }}
            >
              <PrincipalView />
            </AuthContext.Provider>
          </contextoApp.Provider>
        </MemoryRouter>
      );
    });
  };

  it("debe ejecutar funcionalidadScroll y disenoResponsivo en useEffect", async () => {
    await renderPrincipalView();

    expect(funcionalidadScroll).toHaveBeenCalledTimes(1);
    expect(disenoResponsivo).toHaveBeenCalledTimes(1);
  });

  it("debe renderizar correctamente todos los componentes hijos", async () => {
    await renderPrincipalView();

    //Validar que se renderiza navegacion
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    //Validar que se renderiza banner
    expect(screen.getByRole("banner")).toBeInTheDocument();
    //Validar que se renderiza productos
    expect(screen.getByTestId("Productos")).toBeInTheDocument();
    //Validar que se renderiza servicios
    expect(screen.getByRole("region")).toBeInTheDocument();
    //Validar que se renderiza footer
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    //Validar que se renderiza boton-scroll
    expect(screen.getByTestId("Boton-scroll")).toBeInTheDocument();
  });
});
