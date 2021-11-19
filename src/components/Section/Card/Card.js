import React from "react";
import { Link } from 'react-router-dom'
import "./Card.css";



export default function Card({ movie }) {
  console.log("Movie===>", movie.image);
  return (
    <Link className="Card-link" to={"/movie/" + movie.id} > 

    <article className="Card" style={{backgroundImage:`url(${movie.image})`}} >

      <h4>{movie.title}</h4>

    </article>
    </Link>

  );
  
  
}
