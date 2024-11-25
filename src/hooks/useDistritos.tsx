import { useEffect, useState } from "react";
import distritos from "../../public/distritos.json";

export const useDistritos = () => {
  const [distritosState, setDistritosState] = useState(distritos);

  useEffect(() => {
    setDistritosState(distritos);
  }, []);

  return distritosState;
};
