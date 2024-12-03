import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navegacion from "../Navegacion";
import "@testing-library/jest-dom";
import { AuthContext } from "../../context/AuthContexto";
import { UsuarioApi } from "../../models/UsuarioApi.type";
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
describe("Navegacion", () => {
  const renderWithRouter = (ui: JSX.Element) => {
    return render(
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            usuarioAuth: mockUsuarioAuth,
            setUsuarioAuth: mockSetUsuarioAuth,
          }}
        >
          {ui}
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  it("debería mostrar contactos cuando `ocultarContactos` es false", () => {
    renderWithRouter(
      <Navegacion ocultarControles={false} ocultarContactos={false} />
    );

    expect(screen.getByText("+51 988335690")).toBeInTheDocument();
    expect(
      screen.getByText("Av. Javier Prado Este 5282, La Molina")
    ).toBeInTheDocument();
  });

  it("no debería mostrar contactos cuando `ocultarContactos` es true", () => {
    renderWithRouter(
      <Navegacion ocultarControles={false} ocultarContactos={true} />
    );

    expect(screen.queryByText("+51 988335690")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Av. Javier Prado Este 5282, La Molina")
    ).not.toBeInTheDocument();
  });

  it("debería mostrar el botón 'Seguir comprando' cuando `ocultarControles` es true", () => {
    renderWithRouter(
      <Navegacion ocultarControles={true} ocultarContactos={false} />
    );

    expect(screen.getByText("Seguir comprando")).toBeInTheDocument();
  });

  it("debería mostrar controles cuando `ocultarControles` es false", () => {
    renderWithRouter(
      <Navegacion ocultarControles={false} ocultarContactos={false} />
    );

    expect(screen.getByRole("img", { name: "215" })).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: /buscador/i })
    ).toBeInTheDocument();
  });

  it("debería renderizar íconos de redes sociales", () => {
    renderWithRouter(
      <Navegacion ocultarControles={false} ocultarContactos={false} />
    );

    const socialMediaIcons = [
      "fa-facebook-f",
      "fa-twitter",
      "fa-instagram",
      "fa-google-plus-g",
    ];

    socialMediaIcons.forEach((iconClass) => {
      expect(
        document.querySelector(
          `.seccionNavBarPage__navbar-icon--redes.${iconClass}`
        )
      ).toBeInTheDocument();
    });
  });
});
