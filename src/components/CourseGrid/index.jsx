import React from "react";
import Card from "../Card";

const cursos = [
    {
        id: 1,
        titulo: "Programación  orientada a objetos con JavaScript",
        image:
            "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/js-poo.png",
        price: "Us $40",
        profesor: "Beto Quiroga"
    },
    {
        id: 2,
        titulo: "Business Intelligence",
        image:
            "https://res.cloudinary.com/edteam/image/upload/w_400/v1573259688/courses/bi-poster.png",
        price: "Us $50",
        profesor: "Hazbleydi Verástegui"
    },
    {
        id: 3,
        titulo: "Node.js desde cero",
        image:
            "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-11/js-poo.png",
        price: "Us $60",
        profesor: "Camilo Montoya"
    },
    {
        id: 4,
        titulo: "Figma desde cero",
        image:
            "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/figma-desde-cero-poster.png",
        price: "Us $70",
        profesor: "Alvaro Felipe"
    }
];

const CourseGrid = () => (
    <div className="ed-grid m-grid-4">
        {cursos.map(curso => (
            <Card
                key={curso.id}
                id={curso.id}
                title={curso.titulo}
                profesor={curso.profesor}
                price={curso.price}
                image={curso.image}
            />
        ))}
    </div>
);

export default CourseGrid;
