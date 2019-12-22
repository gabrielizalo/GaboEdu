import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: ""
        };
    }

    componentDidMount() {
        let elemento = document.getElementById("elemento");
        console.log(elemento);
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <form action="" id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label htmlFor="">Nombre completo</label>
                            <input type="text" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Email</label>
                            <input type="email" />
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
