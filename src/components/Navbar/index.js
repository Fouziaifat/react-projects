// components/Navbar/index.js
import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, Logo } from "./NavbarElements";
import logoImage from "../../images/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Logo onClick={() => setIsOpen(false)}>
        <img src={logoImage} alt="logo" />
      </Logo>
      <Bars onClick={toggle} />
      <NavMenu isOpen={isOpen}>
        <NavLink to="/" exact onClick={() => setIsOpen(false)}>
          Discover
        </NavLink>
        <NavLink to="/travelStories" exact onClick={() => setIsOpen(false)}>
          Travel Stories
        </NavLink>
        <NavLink to="/contact" exact onClick={() => setIsOpen(false)}>
          Contact Us
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;