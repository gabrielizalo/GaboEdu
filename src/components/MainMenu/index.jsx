import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <a href="/">
                    <img
                        src="https://ed.team/static/images/logo-premium.svg"
                        alt=""
                        className="main-logo"
                    />
                </a>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="activo" exact>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cursos/" activeClassName="activo">
                                Cursos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/historial/" activeClassName="activo">
                                Historial 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/historial/algo" activeClassName="activo">
                                Historial 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto/" activeClassName="activo">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="main-menu-toggle tol-l" id="main-menu-toggle">
                    &nbsp;
                </div>
            </div>
        </div>
    </header>
);

export default MainMenu;
