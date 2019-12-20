import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form action="">
                    <div className="form__item">
                        <label htmlFor="">Nombre completo</label>
                        <input type="text" />
                    </div>
                    <div className="form__item">
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div className="form__item">
                        <input type="submit" value="Enviar" className="button full"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
