import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Logo">
        <Link to="/">
          {" "}
          <img width={100} height={30} alt="Netflix-logo" src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          />
        </Link>
      </div>
      <ul className="NavList">
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/tv-shows"> Tv Shows</Link>{" "}
        </li>
        <li>
          <Link to="/movies"> Movies</Link>
        </li>
      </ul>
    </nav>
  );
}