import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import { useState } from "react";

const MenuItems = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="navbar__item">
      {item.submenu ? (
        <>
          <Link to={item.link} className={` ${dropdown ? "focus-color" : ""}`}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {item.title}
            </button>
          </Link>

          <Dropdown dropdown={dropdown} submenus={item.submenu} />
        </>
      ) : (
        <Link to={item.link}>{item.title}</Link>
      )}
    </li>
  );
};
export default MenuItems;
