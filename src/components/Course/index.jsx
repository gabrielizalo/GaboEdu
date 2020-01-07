import React from "react";
import { cursos } from "../../const";
import { Link } from "react-router-dom";

const Course = props => {
    const { match } = props;
    const idCurso = match.params.id;
    const infoCurso = cursos.filter(curso => curso.id === parseInt(idCurso))[0];

    return (
        <div className="ed-grid m-grid-3">
            {infoCurso ? (
                <>
                    <h1 className="m-cols-3">
                        Curso: {idCurso} - {infoCurso.titulo}
                    </h1>
                    <img
                        className="m-cols-1"
                        src={infoCurso.image}
                        alt={infoCurso.titulo}
                    />
                    <p className="m-cols-2">
                        {infoCurso.price} - Prof. {infoCurso.profesor}
                        <br />
                        <Link to="/cursos/">Volver al Listado de Cursos</Link>
                    </p>
                </>
            ) : (
                <h1>El curso no existe</h1>
            )}
        </div>
    );
};

export default Course;
