import React from "react";
import MenuItem from "../../data/menuItem.json";
import MenuItems from "../menuItems.jsx";

function Menu() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {MenuItem.map((menu, index) => {
          return <MenuItems item={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
}

export default Menu;
