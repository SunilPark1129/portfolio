import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/logo.png";

const links = [
  {
    path: "#about",
    label: "About",
  },
  {
    path: "#skills",
    label: "Skills",
  },
  {
    path: "#projects",
    label: "Projects",
  },
  {
    path: "#keywords",
    label: "Keywords",
  },
  {
    path: "#contact",
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/#">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        {links.map(({ path, label }) => (
          <li key={label}>
            <Link to={path} smooth>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
