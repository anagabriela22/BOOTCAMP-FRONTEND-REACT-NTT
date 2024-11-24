import Busqueda from "./Busqueda";
import Carrito from "./Carrito";
import Categorias from "./Categorias";

const Navegacion = () => {
  return (
    <div className="seccionNavBarPage">
      <div className="seccionNavBarPage__boxes seccionNavBarPage__box--first">
        <div className="seccionNavBarPage__contenido-NavBarside--first">
          <div className="seccionNavBarPage__navbar-contactos--first">
            <p className="seccionNavBarPage__navbar--telefonos">
              <span className="seccionNavBarPage__navbar--icon fa-solid fa-phone"></span>
              <a
                className="seccionNavBarPage__navbar--iphone"
                href="tel:+51 988335690"
                target="_blank"
                rel="noopener noreferrer"
              >
                +51 988335690
              </a>
            </p>

            <p className="seccionNavBarPage__navbar--telefonos">
              <span className="seccionNavBarPage__navbar--icon fa-solid fa-location-dot"></span>
              <a
                className="seccionNavBarPage__navbar--iphone"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Av. Javier Prado Este 5282, La Molina
              </a>
            </p>
          </div>

          <div className="seccionNavBarPage__navbar-contactos--second">
            <a
              className="seccionNavBarPage__navbar-icon--redes fa-brands fa-facebook-f"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="seccionNavBarPage__navbar-icon--redes fa-brands fa-twitter"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="seccionNavBarPage__navbar-icon--redes fa-brands fa-instagram"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              className="seccionNavBarPage__navbar-icon--redes fa-brands fa-google-plus-g"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>

      <div className="seccionNavBarPage__boxes seccionNavBarPage__box--second">
        <div className="seccionNavBarPage__contenido-NavBarside--second">
          <div className="seccionNavBarPage__navbar-redes--first">
            <img
              className="seccionNavBarPage__contenido--Logo"
              src="/src/assets/logo-tienda-desktop.png"
              alt="215"
              width="231"
              height="67"
            />
          </div>

          <div
            id="buscador-pc-contenedor"
            className="seccionNavBarPage__navbar-redes--second"
          >
            <div
              id="buscador"
              className="seccionNavBarPage__navbar-redes--second"
            >
              <Categorias />
              <div className="seccionNavBarPage__navbar-redes--Buscador">
                <Busqueda />
                <span className="seccionNavBarPage__navbar-icon--search fa-solid fa-magnifying-glass"></span>
              </div>
            </div>
          </div>

          <div className="seccionNavBarPage__navbar-redes--third">
            <div className="seccionNavBarPage__navbar-redes--logincompra">
              <span className="seccionNavBarPage__navbar-icon--login lnr lnr-user"></span>
              <Carrito />
            </div>
          </div>
        </div>
      </div>
      <div id="buscador-mobil-contenedor" className=""></div>
    </div>
  );
};

export default Navegacion;
