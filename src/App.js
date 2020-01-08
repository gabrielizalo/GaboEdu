import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Banner from "./components/Banner";
import Course from "./components/Course";
import CourseGrid from "./components/CourseGrid";
import Form from "./components/Form";
import MainMenu from "./components/MainMenu";

import "./styles/styles.scss";

const App = () => (
    <Router>
        <MainMenu />
        <Switch>
            <Route path="/" exact component={Banner} />
            <Route path="/cursos" exact component={CourseGrid} />
            <Route path="/cursos/:id" exact component={Course} />
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
        </Switch>
    </Router>
);

export default App;
