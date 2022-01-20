import React from "react";
import { Link, useLocation } from "wouter";
import "./styles.css";

export default function Nav() {
  const [location, setLocation] = useLocation();

  return (
    <nav className="menu">
      <Link className={location === "/" ? "link active" : "link"} to="/">
        Home
      </Link>
      <Link
        className={location === "/favorites" ? "link active" : "link"}
        to="/favorites"
      >
        Favorites
      </Link>
    </nav>
  );
}
