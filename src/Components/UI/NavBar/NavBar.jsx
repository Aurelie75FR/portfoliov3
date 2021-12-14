import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import classes from "./NavBar.module.css";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {/* {(toggleNav || width > 700) || (
        <ul className={classes.navList}>
          <NavLink end className={classes.page} activeClassName={classes.current} to="/">
            Home
          </NavLink>
          <NavLink
            end
            className={classes.page}
            
            to="/apropos"
          >
            A Propos
          </NavLink>
          <NavLink
            end
            className={classes.page}
            
            to="/projets"
          >
            Projets
          </NavLink>
          <NavLink
            end
            className={classes.page}
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      )} */}
      {(toggleNav || width < 700) && (
        <ul className={classes.navList}>
          <NavLink end className={classes.page} to="/contact">
            Contactez moi
          </NavLink>
        </ul>
      )}
      <button onClick={handleToggle} className={classes.btn}>
        <FaBars />
      </button>
    </nav>
  );
};

export default NavBar;
