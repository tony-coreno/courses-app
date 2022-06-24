const Header = () => {
  return (
    <>
      <header id="header" class="header">
        <div class="container">
          <div class="row">
            <div class="four columns">
              <img src="https://img.icons8.com/officel/40/undefined/react.png" />
            </div>
            <div class="two columns u-pull-right">
              <ul>
                <li class="submenu">
                  <img src="img/cart.png" id="img-carrito" />
                  <div id="carrito">
                    <table id="lista-carrito" class="u-full-width">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Articles</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>

                    <a href="#" id="vaciar-carrito" class="button u-full-width">
                      Clean
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div id="hero">
        <div class="container">
          <div class="row">
            <div class="six columns">
              <div class="contenido-hero">
                <h2><b>Learn Something New</b></h2>
                <p><b>All courses since $9.99</b></p>
                <form action="#" id="busqueda" method="post" class="formulario">
                  <input
                    class="u-full-width"
                    type="text"
                    placeholder="What would you like to learn?"
                    id="buscador"
                  />
                  <input
                    type="submit"
                    id="submit-buscador"
                    class="submit-buscador"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="barra">
        <div class="container">
          <div class="row">
            <div class="four columns icono icono1">
              <p>
                20,000 Cursos en línea <br />
                Explora los temas más recientes
              </p>
            </div>
            <div class="four columns icono icono2">
              <p>
                Instructores Expertos <br />
                Aprende con distintos estilos
              </p>
            </div>
            <div class="four columns icono icono3">
              <p>
                Acceso de por vida <br />
                Aprende a tu ritmo
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
