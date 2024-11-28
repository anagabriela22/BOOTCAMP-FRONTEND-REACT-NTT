import { renderHook } from "@testing-library/react-hooks";
import { useDistritos } from "../../hooks/useDistritos";

jest.mock("../../../public/distritos.json", () => [
  { id: "1", nombre: "Distrito 1" },
  { id: "2", nombre: "Distrito 2" },
]);

describe("useDistritos", () => {
  beforeAll(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("debería retornar los distritos correctamente", () => {
    const { result } = renderHook(() => useDistritos());

    expect(result.current).toEqual([
      { id: "1", nombre: "Distrito 1" },
      { id: "2", nombre: "Distrito 2" },
    ]);
  });
});
