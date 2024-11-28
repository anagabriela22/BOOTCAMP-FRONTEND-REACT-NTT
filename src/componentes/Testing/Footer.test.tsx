import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Componente Footer", () => {
  it("debería renderizar las secciones principales del footer", () => {
    render(<Footer />);

    expect(screen.getByText("Lo Que Ofrecemos")).toBeInTheDocument();
    expect(screen.getByText("Información")).toBeInTheDocument();
    expect(screen.getByText("Noticias")).toBeInTheDocument();
  });

  it("debería renderizar la lista de 'Lo Que Ofrecemos'", () => {
    render(<Footer />);

    const items = [
      "Celulares",
      "Tablet",
      "Maquillajes",
      "Deportivo",
      "Ropa para Mujer",
      "Perfumes",
    ];

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("debería renderizar la lista de 'Información'", () => {
    render(<Footer />);

    const items = [
      "Nosotros",
      "Últimas Noticias",
      "Otras Compras",
      "FAQ",
      "Compras",
      "Contactanos",
    ];

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("debería mostrar el formulario de suscripción", () => {
    render(<Footer />);

    expect(
      screen.getByPlaceholderText("Escribe tu E-mail")
    ).toBeInTheDocument();
    expect(screen.getByText("Suscribete")).toBeInTheDocument();
  });

  it("debería mostrar el número de teléfono", () => {
    render(<Footer />);
    expect(screen.getByText("+51 998335690")).toBeInTheDocument();
  });

  it("debería mostrar la dirección", () => {
    render(<Footer />);
    expect(
      screen.getByText("Av. Javier Prado Este 5282, La Molina")
    ).toBeInTheDocument();
  });

  it("debería renderizar las redes sociales", () => {
    render(<Footer />);

    const socialMediaIcons = [
      "fa-facebook-f",
      "fa-twitter",
      "fa-instagram",
      "fa-google-plus-g",
    ];

    socialMediaIcons.forEach((iconClass) => {
      const socialIcon = screen.getByTestId(iconClass);
      expect(socialIcon).toBeInTheDocument();
    });
  });

  it("debería mostrar los derechos reservados", () => {
    render(<Footer />);
    expect(
      screen.getByText(
        "© 2024. Todos los derechos reservados. Diseño de Ana Gabriela"
      )
    ).toBeInTheDocument();
  });
});
