import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        };
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

    changeName(e) {
        this.setState({ nombre: e.target.value });
    }

    changeEmail(e) {
        this.setState({ correo: e.target.value });
    }

    changeDate() {
        this.setState({ fecha: new Date() });
    }

    componentDidMount() {
        let elemento = document.getElementById("elemento");
        console.log(elemento);

        this.intervalDate = setInterval(() => { this.changeDate() }, 1000);

        console.log(new Date())
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);
        console.log(prevState);
        console.log("-------------------");
    }

    componentWillUnmount() {
        clearInterval(this.intervalDate)
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>{this.state.fecha / 1000}</h4>
                <form action="" id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label htmlFor="">Nombre completo</label>
                            <input type="text" onChange={this.changeName} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Email</label>
                            <input type="email" onChange={this.changeEmail} />
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
