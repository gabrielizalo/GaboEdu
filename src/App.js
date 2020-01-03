import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./components/Banner";
import Form from "./components/Form";
import CourseGrid from "./components/CourseGrid";

import "./styles/styles.scss";

const App = () => (
    <Router>
        <Route path="/" exact component={Banner} />
        <Route path="/cursos" exact component={CourseGrid} />
        <Route
            path="/contacto"
            exact
            component={() => <Form name={"EDTeam"} />}
        />
        <Route
            component={() => (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                </div>
            )}
        />
    </Router>
);

export default App;
