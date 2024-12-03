import { render, screen, fireEvent } from "@testing-library/react";
import TarjetaProducto from "../TarjetaProducto";
import { contextoApp } from "../../context/Contexto";
import "@testing-library/jest-dom";
import { EstadoApp } from "../../context/Reducer";
import { ProductoCarrito } from "../../models/ProductoCarrito.type";
import { Disponibilidad } from "../../mappers/Producto.mapper";

const mockDispatch = jest.fn();

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

describe("TarjetaProducto", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });
  const renderTarjeta = () => {
    render(
      <contextoApp.Provider
        value={{
          state: mockState,
          dispatch: mockDispatch,
        }}
      >
        <TarjetaProducto producto={mockState.productosFiltrados[0]} />
      </contextoApp.Provider>
    );
  };
  it("debe mostrar la información del producto", () => {
    renderTarjeta();

    expect(
      screen.getByText(mockState.productosFiltrados[0].title)
    ).toBeInTheDocument();
    expect(
      screen.getByText("$" + mockState.productosFiltrados[0].price + ".00")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Disponibilidad: " + mockState.productosFiltrados[0].availabilityStatus
      )
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(mockState.productosFiltrados[0].title)
    ).toHaveAttribute("src", mockState.productosFiltrados[0].thumbnail);
  });

  it("debe mostrar el botón 'Agregar al carrito' si el producto no está en el carrito", () => {
    renderTarjeta();

    const agregarButton = screen.getByText("Agregar al carrito");
    expect(agregarButton).toBeInTheDocument();
  });

  it("debe agregar el producto al carrito cuando se hace clic en 'Agregar al carrito'", () => {
    renderTarjeta();

    const agregarButton = screen.getByText("Agregar al carrito");
    fireEvent.click(agregarButton);

    let nuevoProductoCarrito: ProductoCarrito = {
      producto: mockState.productosFiltrados[0],
      cantidad: 1,
    };

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "AGREGAR_AL_CARRITO",
      payload: nuevoProductoCarrito,
    });
  });

  it("debe mostrar 'En el carrito' si el producto ya está en el carrito", () => {
    let nuevoProductoCarrito: ProductoCarrito = {
      producto: mockState.productosFiltrados[0],
      cantidad: 1,
    };
    mockState.productosCarrito.push(nuevoProductoCarrito);
    renderTarjeta();

    const enCarritoButton = screen.getByText("En el carrito");
    expect(enCarritoButton).toBeInTheDocument();
  });

  it("no debe disparar dispatch al hacer clic en 'En el carrito'", () => {
    renderTarjeta();

    const enCarritoButton = screen.getByText("En el carrito");
    fireEvent.click(enCarritoButton);

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
