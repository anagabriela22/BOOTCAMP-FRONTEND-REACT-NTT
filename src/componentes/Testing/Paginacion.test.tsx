import { render, screen, fireEvent } from "@testing-library/react";
import Paginacion from "../Paginacion";
import "@testing-library/jest-dom";

describe("Paginacion", () => {
  const onPageChangeMock = jest.fn();

  const renderPaginacion = ({
    totalElementos = 50,
    elementosPorPagina = 10,
    paginaActual = 1,
  } = {}) => {
    render(
      <Paginacion
        totalElementos={totalElementos}
        elementosPorPagina={elementosPorPagina}
        paginaActual={paginaActual}
        onPageChange={onPageChangeMock}
      />
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("no renderiza la paginación si solo hay una página", () => {
    renderPaginacion({ totalElementos: 5, elementosPorPagina: 10 });
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("renderiza correctamente los botones de paginación", () => {
    renderPaginacion();
    const botones = screen.getAllByRole("button");
    expect(botones).toHaveLength(5);
    expect(botones[0]).toHaveTextContent("1");
    expect(botones[4]).toHaveTextContent("5");
  });

  test("aplica la clase 'active' al botón de la página actual", () => {
    renderPaginacion({ paginaActual: 3 });
    const botonActivo = screen.getByRole("button", { name: "3" });
    expect(botonActivo).toHaveClass("active");
  });

  test("llama a 'onPageChange' con el número de página correcto al hacer clic", () => {
    renderPaginacion();

    const boton = screen.getByRole("button", { name: "2" });
    fireEvent.click(boton);

    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
});
