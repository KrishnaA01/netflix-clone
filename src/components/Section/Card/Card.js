import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card({ movie, content }) {
 

  return (
    <Link to={`/${content}/${movie.id}`}
    style={{ textDecoration: 'none' }}
    >
      <article
        className="Card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <h4>{movie.title}</h4>
      </article>
    </Link>
  );
}

//params = {key:value}
// ==> key from Route
// ==> value from Link

// <Link to={'/' + content +'/'+ movie.id}>