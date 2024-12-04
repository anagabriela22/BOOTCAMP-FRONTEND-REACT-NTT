// es un componente estatico hacerle expect de cada prop o contenido no aporta ya que no es condicionado, bastar'ia con un snapshot
import { render, screen } from "@testing-library/react";
import Servicios from "../Servicios";
import "@testing-library/jest-dom";

describe("Servicios", () => {
  it("debe renderizar el título 'Delivery Gratis'", () => {
    render(<Servicios />);
    const title = screen.getByText("Delivery Gratis");
    expect(title).toBeInTheDocument();
  });

  it("debe renderizar la descripción 'Si pides más de 3 productos...'", () => {
    render(<Servicios />);
    const description = screen.getByText(/Si pides más de 3 productos/);
    expect(description).toBeInTheDocument();
  });

  it("debe renderizar el ícono de coche", () => {
    render(<Servicios />);
    const icon = screen.getByTestId("icono-carro");
    expect(icon).toBeInTheDocument();
  });

  it("debe renderizar el título 'Ubicación Conveniente'", () => {
    render(<Servicios />);
    const title = screen.getByText("Ubicación Conveniente");
    expect(title).toBeInTheDocument();
  });

  it("debe renderizar la descripción 'Nuestra pizzería está situada en el centro de la ciudad...'", () => {
    render(<Servicios />);
    const description = screen.getByText(
      /Nuestra pizzería está situada en el centro de la ciudad/
    );
    expect(description).toBeInTheDocument();
  });

  it("debe renderizar el ícono de mapa", () => {
    render(<Servicios />);
    const icon = screen.getByTestId("icono-mapa");
    expect(icon).toBeInTheDocument();
  });

  it("debe renderizar el título 'Wi-Fi Gratis'", () => {
    render(<Servicios />);
    const title = screen.getByText("Wi-Fi Gratis");
    expect(title).toBeInTheDocument();
  });

  it("debe renderizar la descripción 'Disponemos de Wifi gratuito a disposición...'", () => {
    render(<Servicios />);
    const description = screen.getByText(
      /Disponemos de Wifi gratuito a disposición/
    );
    expect(description).toBeInTheDocument();
  });

  it("debe renderizar el ícono de wifi", () => {
    render(<Servicios />);
    const icon = screen.getByTestId("icono-wifi");
    expect(icon).toBeInTheDocument();
  });

  it("debe renderizar el título 'Servicio de Calidad'", () => {
    render(<Servicios />);
    const title = screen.getByText("Servicio de Calidad");
    expect(title).toBeInTheDocument();
  });

  it("debe renderizar la descripción 'El cliente es nuestra prioridad...'", () => {
    render(<Servicios />);
    const description = screen.getByText(/El cliente es nuestra prioridad/);
    expect(description).toBeInTheDocument();
  });

  it("debe renderizar el ícono de pulgar hacia arriba", () => {
    render(<Servicios />);
    const icon = screen.getByTestId("icono-pulgar");
    expect(icon).toBeInTheDocument();
  });
});
