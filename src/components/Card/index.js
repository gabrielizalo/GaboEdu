import React from "react";

const Card = ({title, image, price, profesor}) => (
  <article className="card" id={title}>
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src={image} alt={title} />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">{title}</h3>
      <div className="s-main-center">
        { `Prof.: ${profesor}` }
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team/">{`${price}`}</a>
      </div>
    </div>
  </article>
);

export default Card;
