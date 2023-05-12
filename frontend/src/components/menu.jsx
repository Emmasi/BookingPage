import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/Aboutus">Om oss</Link>
        </li>
        <li className="menu__item">
          <Link to="/Horses">Hästar</Link>
        </li>
        <li className="menu__item">
          <Link to="/Booking">Boka lektion</Link>
        </li>
        <li className="menu__item">
          <Link to="Prices">Priser</Link>
        </li>
        <li className="menu__item">
          <Link to="Contact">Hitta hit</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
