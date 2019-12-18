import React from 'react';
import './styles/styles.scss';
import Card from './components/Card';

const cursos = [
  {
    "title": "Programación orientada a objetos con JavaScript",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/js-poo.png",
    "profesor": "Beto Quiroga",
    "price": "COP 53.000"
  },
  {
    "title": "Business Intelligence",
    "image": "https://res.cloudinary.com/edteam/image/upload/w_400/v1573259688/courses/bi-poster.png",
    "profesor": "Hazbleydi Verástegui",
    "price": "COP 70.000"
  },
  {
    "title": "Node.js desde cero",
    "image": "https://res.cloudinary.com/edteam/image/upload/w_400/v1573257385/courses/nodejs.png",
    "profesor": "Camilo Montoya",
    "price": "COP 158.000"
  }
];

const App = () => (
    <>
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img className="main-banner__img" alt="City" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&w=1000&q=80" />
                        <div className="main-banner__data s-center">
                            <p className="t2 s-mb-0">Título del banner</p>
                            <p> Subtítulo del banner</p>
                            <a href="https://ed.team/" className="button">Botón del banner</a>
                        </div>
                </div>
            </div>
        </div>
        <div className="ed-grid m-grid-3">
            {
              cursos.map( curso => <Card title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} />)
            }
        </div>
    </>
);

export default App;
