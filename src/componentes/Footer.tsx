export const Footer = () => (
  <div className="seccionFooter">
    <div className="seccionFooter__container">
      <div className="seccionFooter__boxes seccionFooter__boxes--first">
        <div className="seccionFooter__subbox seccionFooter__box--first">
          <p className="seccionFooter__Servicios">Lo Que Ofrecemos</p>
          <ul className="seccionFooter__ListaOfrecer">
            <li>
              <a href="#">Celulares</a>
            </li>
            <li>
              <a href="#">Tablet</a>
            </li>
            <li>
              <a href="#">Maquillajes</a>
            </li>
            <li>
              <a href="#">Deportivo</a>
            </li>
            <li>
              <a href="#">Ropa para Mujer</a>
            </li>
            <li>
              <a href="#">Perfumes</a>
            </li>
          </ul>
        </div>
        <div className="seccionFooter__subbox seccionFooter__box--second">
          <p className="seccionFooter__Servicios">Información</p>
          <ul className="seccionFooter__ListaOfrecer">
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Últimas Noticias</a>
            </li>
            <li>
              <a href="#">Otras Compras</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Compras</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
            </li>
          </ul>
        </div>
        <div className="seccionFooter__subbox seccionFooter__box--third">
          <p className="seccionFooter__Servicios">Noticias</p>

          <p className="seccionFooter__registrar">
            Regístrese hoy para recibir las últimas noticias y actualizaciones.
          </p>

          <div className="seccionFooter__botonesSubscribe">
            <div className="seccionFooter__botonesdoble">
              <input
                className="seccionFooter__inputBoton"
                type="email"
                name="email"
                placeholder="Escribe tu E-mail"
              />
            </div>
            <div className="seccionFooter__botonesdoble">
              <button className="seccionFooter__Suscribete">
                <span className="seccionFooter__Suscribete--texto">
                  Suscribete
                </span>
                <span className="seccionFooter__Suscribete--icon fa-solid fa-paper-plane"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="seccionFooter__boxes seccionFooter__boxes--second">
        <div className="seccionFooter__subbox seccionFooter__subox--first">
          <p className="seccionFooter__porcentaje">
            <img
              src="/src/assets/like-icon-58x25.webp"
              alt="logo like"
              width="58"
              height="25"
            />
            9.4k
          </p>
        </div>
        <div className="seccionFooter__subbox seccionFooter__subox--first">
          <div className="seccionFooter__informaciones">
            <div className="seccionFooter__informaciones--boxes">
              <span className="seccionFooter__informaciones--icon fa-solid fa-phone"></span>
              <a
                href="tel:#988335690"
                className="seccionFooter__informaciones--textos"
              >
                +51 998335690
              </a>
            </div>
            <div className="seccionFooter__informaciones--boxes">
              <div className="seccionFooter__informaciones--boxes">
                <span className="seccionFooter__informaciones--icon fa-regular fa-envelope"></span>
                <a
                  href="tel:#988335690"
                  className="seccionFooter__informaciones--textos"
                >
                  info@hotmail.com
                </a>
              </div>
            </div>
            <div className="seccionFooter__informaciones--boxes">
              <div className="seccionFooter__informaciones--boxes">
                <a
                  className="seccionFooter__informaciones--icon seccionFooter__icon--first fa-brands fa-facebook-f"
                  href="#"
                ></a>
                <a
                  className="seccionFooter__informaciones--icon seccionFooter__icon--first fa-brands fa-twitter"
                  href="#"
                ></a>
                <a
                  className="seccionFooter__informaciones--icon seccionFooter__icon--first fa-brands fa-instagram"
                  href="#"
                ></a>
                <a
                  className="seccionFooter__informaciones--icon seccionFooter__icon--first fa-brands fa-google-plus-g"
                  href="#"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seccionFooter__boxes seccionFooter__boxes--third">
        <div className="seccionFooter__subbox">
          <p className="seccionFooter__direccion">
            Av. Javier Prado Este 5282, La Molina
          </p>
        </div>
        <div className="seccionFooter__subbox">
          <p className="seccionFooter__derechos">
            © 2024. Todos los derechos reservados. Diseño de Ana Gabriela
          </p>
        </div>
      </div>
    </div>
  </div>
);
