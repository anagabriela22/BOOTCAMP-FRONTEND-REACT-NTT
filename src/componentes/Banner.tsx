const Banner = () => {
  return (
    <div role="banner" className="seccionBannerPrincipal">
      <div className="seccionBannerPrincipal__contenido">
        <p className="seccionBannerPrincipal__contenido--Textos">
          Aromas de Calidad
        </p>
        <p className="seccionBannerPrincipal__contenido--descripcion">
          Utilizamos las notas más exquisitas para crear fragancias únicas que
          despiertan emociones inolvidables.
        </p>

        <a
          className="seccionBannerPrincipal__botonbanner"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver mas fragancias
        </a>
      </div>

      <div className="seccionBannerPrincipal__itemPictures">
        <img
          alt="banner principal"
          className="seccionBannerPrincipal__Imagen"
          loading="lazy"
          src="/src/assets/banner-principal.webp"
          typeof="image/webp"
          width="1918"
          height="753"
        />
      </div>
    </div>
  );
};

export default Banner;
