import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ title, image, price, profesor, id }) => (
    <article className="card" id={title}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{title}</h3>
            <div className="s-main-center">{`Prof.: ${profesor}`}</div>
            <div className="s-main-center">
                <a
                    className="button--ghost-alert button--tiny"
                    href="https://ed.team/"
                >{`${price}`}</a>
            </div>
        </div>
    </article>
);

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
};

Card.defaultProps = {
    title: "Curso Sin Título",
    image:
        "https://increasify.com.au/wp-content/uploads/2016/08/default-image.png",
    price: "--",
    profesor: "Sin info"
};

export default Card;
