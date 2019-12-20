import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: ""
        };
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form action="">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label htmlFor="">Nombre completo</label>
                            <input type="text" onChange={ e => this.setState( { nombre: e.target.value } ) } />
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Email</label>
                            <input type="email"  onChange={ e => this.setState( { correo: e.target.value } ) } />
                        </div>
                    </div>
                </form>
                <h2>{`Hola ${this.state.nombre}`}</h2>
                <span>{`Tu correo es: ${this.state.correo}`}</span>
            </div>
        );
    }
}

export default Form;
