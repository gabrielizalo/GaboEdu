import React from 'react';

const mayorDeEdad = edad => edad >= 18;

const persona = { 'nombre': 'Alberto', 'apellido': 'Quiroga', 'edad': 46 };

const Card = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://images.unsplash.com/photo-1529619768328-e37af76c6fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=300&q=20" alt="" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {
                    mayorDeEdad(persona.edad) ? <h3>Mayor de edad</h3> : <p>Menor de edad</p>
                }
            </h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                        <div className="circle img-container">
                            <img src="https://images.unsplash.com/photo-1541702467897-41915a07d3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                        </div>
                    </div>
                    <span className="small">{  `${persona.nombre} ${persona.apellido}`}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team/">$ 20USD</a>
            </div>
        </div>
    </article>
);

export default Card;
