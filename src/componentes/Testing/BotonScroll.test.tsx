import { render } from "@testing-library/react";
import BotonScroll from "../BotonScroll";
import "@testing-library/jest-dom";

describe("Componente BotonScroll", () => {
  it("deberia renderizar un elemento con el id 'ui-to-top'", () => {
    render(<BotonScroll />);
    const boton = document.getElementById("ui-to-top");
    expect(boton).toBeInTheDocument();
  });

  it("deberia contener las clases 'seccionAnclaBoton', 'fa-solid' y 'fa-arrow-up'", () => {
    render(<BotonScroll />);
    const boton = document.getElementById("ui-to-top");
    expect(boton).toHaveClass("seccionAnclaBoton");
    expect(boton).toHaveClass("fa-solid");
    expect(boton).toHaveClass("fa-arrow-up");
  });

  it("deberia ser un elemento de tipo 'a'", () => {
    render(<BotonScroll />);
    const boton = document.getElementById("ui-to-top");
    expect(boton?.tagName).toBe("A");
  });
});
