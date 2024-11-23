interface PaginacionProps {
  totalElementos: number;
  elementosPorPagina: number;
  paginaActual: number;
  onPageChange: (pagina: number) => void;
}

const Paginacion = ({
  totalElementos,
  elementosPorPagina,
  paginaActual,
  onPageChange,
}: PaginacionProps) => {
  const totalPaginas = Math.ceil(totalElementos / elementosPorPagina);

  if (totalPaginas <= 1) return null;

  return (
    <div className="paginacion">
      {[...Array(totalPaginas)].map((_, index) => {
        const numeroPagina = index + 1;
        return (
          <button
            key={numeroPagina}
            className={`paginacion__boton ${
              numeroPagina === paginaActual ? "active" : ""
            }`}
            onClick={() => onPageChange(numeroPagina)}
          >
            {numeroPagina}
          </button>
        );
      })}
    </div>
  );
};

export default Paginacion;
