import { NavLink } from "react-router-dom";

import Nav from "./Nav";

import CartDataNav from "./CartDataNav";
import Reserve from "./Reserve";

import IBab from "../../assets/main-icon.gif";
import IBabSmall from "../../assets/main-icon-small.svg";

import "./style.scss";

const Header = () => {
  return (
    <header className="main-header">
      <NavLink to="/">
        <div className="main-icon">
          <img className="main-icon__small" src={IBabSmall} alt="Babushka" />
          <img className="main-icon__large" src={IBab} alt="Babushka" />
        </div>
      </NavLink>
      <div className="main-header__right">
        <Nav />
        <Reserve />
        <CartDataNav />
      </div>
    </header>
  );
};

export default Header;
