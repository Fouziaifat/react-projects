// components/Navbar/navbarElements.js
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #ffffff;
  height: 10%;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 1000; /* Increased z-index */
  align-items: center;
  position: relative; /* Ensure this is positioned */
`;

export const Logo = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;

  img {
    height: 100px; // Logo size
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 2rem; // Increased padding for more space between links
  height: 100%;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 50px; // Added for a subtle rounded corner
  &.active {
    color: #000000;
    background: #f0f0f3; // Slightly darker background for active link
    box-shadow: inset 5px 5px 10px #babecc, inset -5px -5px 10px #ffffff; // Inner shadows for pressed effect
  }
  &:hover {
    background: #f0f0f3;
    box-shadow: inset 2px 2px 5px #babecc, inset -2px -2px 5px #ffffff; // Subtle hover effect
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 92%; /* Adjust based on your Nav height */
    left: 0;
    background: #ffffff;
    border-radius: 10px;
    padding: 2rem 1rem;
    z-index: 1000; /* Ensure it's the same or higher than Nav */
  }
`;