import { courses } from "../../courses";

const Body = () => {
  return (
    <>
      <div id="lista-cursos" class="container">
        <h1 id="encabezado" class="encabezado">
          Developers Courses
        </h1>

          {courses.map((course, i) => {
            return (
              <div class="four columns">
                <div class="card">
                    <img src={course.img} class="imagen-curso u-full-width" />
                    <div class="info-card">
                      <h4>{course.title}</h4>
                      <p>{course.autor}</p>
                      <img src="img/estrellas.png" />
                      <p class="precio">
                        $200 <span class="u-pull-right ">${course.price}</span>
                      </p>
                      <a
                        href="#"
                        class="u-full-width button-primary button input agregar-carrito"
                        data-id="2"
                      >
                        Agregar Al Carrito
                      </a>
                    </div>
                  </div>
                </div>
            );
          })}

          <div class="four columns">
            <div class="card">
              <img src="img/curso3.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Guitarra para Principiantes</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="3"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="four columns">
            <div class="card">
              <img src="img/curso4.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Huerto en tu casa</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="4"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
          <div class="four columns">
            <div class="card">
              <img src="img/curso5.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Decoraci??n con productos de tu hogar</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="5"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
          <div class="four columns">
            <div class="card">
              <img src="img/curso1.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Dise??o Web para Principiantes</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="6"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="four columns">
            <div class="card">
              <img src="img/curso2.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Comida Mexicana para principiantes</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="7"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
          <div class="four columns">
            <div class="card">
              <img src="img/curso3.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Estudio Musical en tu casa</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="8"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
          <div class="four columns">
            <div class="card">
              <img src="img/curso4.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Cosecha tus propias frutas y verduras</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="9"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="four columns">
            <div class="card">
              <img src="img/curso5.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>Prepara galletas caseras</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="10"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
          <div class="four columns">
            <div class="card">
              <img src="img/curso1.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>JavaScript Moderno con ES6</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="11"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
          <div class="four columns">
            <div class="card">
              <img src="img/curso2.jpg" class="imagen-curso u-full-width" />
              <div class="info-card">
                <h4>100 Recetas de Comida Natural</h4>
                <p>Juan Pedro</p>
                <img src="img/estrellas.png" />
                <p class="precio">
                  $200 <span class="u-pull-right ">$15</span>
                </p>
                <a
                  href="#"
                  class="u-full-width button-primary button input agregar-carrito"
                  data-id="12"
                >
                  Agregar Al Carrito
                </a>
              </div>
            </div>
          </div>
        </div>
          
    </>
  );
};

export default Body;
