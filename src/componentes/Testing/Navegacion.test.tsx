import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navegacion from "../Navegacion";
import "@testing-library/jest-dom";

describe("Navegacion", () => {
  const renderWithRouter = (ui: JSX.Element) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
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
