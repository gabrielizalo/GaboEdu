import React from "react";
import Card from "../Card";
import { cursos } from "../../const"

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
