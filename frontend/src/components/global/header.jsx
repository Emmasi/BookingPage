import Menu from "../menu";
import React from "react";
import Skiplink from "../skiplink";

const Header = () => {
  return (
    <header className="header">
      <Skiplink />
      <div className="header__top">
        <a>Facebook</a>
        <a>Instagram</a>
      </div>
      <div className="header__container">
        <span className="header__inner">logga</span>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
