import React from "react";

const curso = {
  title: "Desarrollo frontend con React.js",
  image:
    "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desarrollo%20frotend.png",
  price: "USD 50"
};

const Card = () => (
  <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={curso.image} alt={curso.title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{curso.title}</h3>
      <div className="s-main-center">
        <a
          className="button--ghost-alert button--tiny"
          href="https://ed.team/"
        >{`$ ${curso.price}`}</a>
      </div>
    </div>
  </article>
);

export default Card;
