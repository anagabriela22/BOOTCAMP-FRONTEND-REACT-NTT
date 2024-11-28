import { render, screen, fireEvent } from "@testing-library/react";
import { contextoApp } from "../../../context/Contexto";
import TablaProductos from "../../Carrito/TablaProductos";
import { EstadoApp } from "../../../context/Reducer";
import { Disponibilidad } from "../../../mappers/Producto.mapper";
import "@testing-library/jest-dom";

const mockDispatch = jest.fn();
const mockState: EstadoApp = {
  productos: [],
  productosFiltrados: [],
  modoFiltro: false,
  carritoContador: 0,
  productosCarrito: [
    {
      producto: {
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
      cantidad: 2,
    },
  ],
  erorApp: null,
};

describe("TablaProductos", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe renderizar correctamente los productos en el carrito", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <TablaProductos />
      </contextoApp.Provider>
    );

    expect(screen.getByText("Perfume Elegante")).toBeInTheDocument();
  });

  it("debe calcular correctamente el precio total por producto", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <TablaProductos />
      </contextoApp.Provider>
    );

    expect(screen.getByText("$100.00")).toBeInTheDocument(); // 50 * 2
  });

  it("debe incrementar la cantidad de un producto cuando se hace clic en el botón +", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <TablaProductos />
      </contextoApp.Provider>
    );

    const incrementarBtn = screen.getAllByText("+")[0];
    fireEvent.click(incrementarBtn);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ACTUALIZAR_CANTIDAD",
      payload: { id: mockState.productosCarrito[0].producto.id, cantidad: 3 },
    });
  });

  it("debe decrementar la cantidad de un producto cuando se hace clic en el botón -", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <TablaProductos />
      </contextoApp.Provider>
    );

    const decrementarBtn = screen.getAllByText("-")[0];
    fireEvent.click(decrementarBtn);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ACTUALIZAR_CANTIDAD",
      payload: { id: mockState.productosCarrito[0].producto.id, cantidad: 1 },
    });
  });

  it("no debe decrementar la cantidad si es menor a 1", () => {
    mockState.productosCarrito[0].cantidad = 1;

    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <TablaProductos />
      </contextoApp.Provider>
    );

    const decrementarBtn = screen.getByText("-");
    fireEvent.click(decrementarBtn);

    expect(mockDispatch).not.toHaveBeenCalled();
  });

  it("debe eliminar un producto cuando se hace clic en el botón Eliminar", () => {
    render(
      <contextoApp.Provider
        value={{ state: mockState, dispatch: mockDispatch }}
      >
        <TablaProductos />
      </contextoApp.Provider>
    );

    const eliminarBtn = screen.getAllByText("Eliminar")[0];
    fireEvent.click(eliminarBtn);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ELIMINAR_DEL_CARRITO",
      payload: mockState.productosCarrito[0].producto.id,
    });
  });
});
