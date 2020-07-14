import React from "react";

function Card(props) {
  return (
    <div className="p-card--highlighted">
      <div>
        <h5 className="p-card__title">CLOUD AND SERVER</h5>
        <img
          className="p-image--shadowed"
          src={props.article.image}
          alt={props.article.title}
        ></img>
        <p className="p-heading--4">{props.article.title}</p>
      </div>
      <div>
        <p className="p-card__content">
          By{" "}
          <a
            className="author-link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.article.authorLink}
          >
            {props.article.author}
          </a>{" "}
          on {props.article.day} {props.article.month} {props.article.year}
        </p>
        <p className="p-heading--5">Article</p>
      </div>
    </div>
  );
}

export default Card;
