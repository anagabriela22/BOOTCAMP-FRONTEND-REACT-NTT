// Tal vez ser'ia ideal crear una carpeta por cada componente para que el test este al mismo nivel y no separado algo as'i ya que generalmente se usa la carpeta __tests__

// components/Banner/Banner.tsx
// components/Banner/__tests__/Banner.test.tsx

// al ser un componente con data estatica conviene hacer uso de un snapshot que estar evaluando contenido que siempre ser'a fijo.

import { render, screen } from "@testing-library/react";
import Banner from "../Banner";
import "@testing-library/jest-dom";

describe("Componente Banner", () => {
  it("debería renderizarse correctamente", () => {
    // este test no evalua ningún comportamiento
    render(<Banner />);
  });

  it('debería mostrar el texto principal "Aromas de Calidad"', () => {
    render(<Banner />);

    const textoPrincipal = screen.getByText("Aromas de Calidad");
    expect(textoPrincipal).toBeInTheDocument();
  });

  it("debería contener la descripción esperada", () => {
    render(<Banner />);

    const descripcion = screen.getByText(/Utilizamos las notas más exquisitas/);
    expect(descripcion).toBeInTheDocument();
  });

  it("debería tener un enlace con las propiedades correctas", () => {
    render(<Banner />);

    const enlace = screen.getByRole("link", { name: /Ver mas fragancias/i });
    expect(enlace).toBeInTheDocument();
    expect(enlace).toHaveAttribute("href", "#");
    expect(enlace).toHaveAttribute("target", "_blank");
  });

  it("debería renderizar la imagen con las propiedades correctas", () => {
    render(<Banner />);

    const imagen = screen.getByAltText("banner principal");
    expect(imagen).toBeInTheDocument();
    expect(imagen).toHaveAttribute("src", "/src/assets/banner-principal.webp");
    expect(imagen).toHaveAttribute("width", "1918");
    expect(imagen).toHaveAttribute("height", "753");
  });
});
