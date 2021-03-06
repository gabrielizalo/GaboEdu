import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="main-banner img-container l-section" id="main-banner">
            <div className="ed-grid lg-grid-6">
                <div className="lg-cols-4 lg-x-2">
                    <img
                        className="main-banner__img"
                        alt="City"
                        src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&w=1000&q=80"
                    />
                    <div className="main-banner__data s-center">
                        <p className="t2 s-mb-0">Título del banner</p>
                        <p> Subtítulo del banner</p>
                        <Link to="/cursos/" className="button">
                            Botón del banner
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
