import React, { FC, HTMLProps } from "react";
import classes from "./Navbar.module.css";
import Container from "../Container";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface NavbarProps extends HTMLProps<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.container}>
          <div className={classes.name}>
            <Link to="/">OZZY GOMEZ</Link>
          </div>
          <nav className={classNames(classes.nav, classes.desktop)}>
            <Link to="/recipes">Recipes</Link>
            <Link to="/videos">Videos</Link>
            <Link to="/music">Music</Link>
            <Link to="/photos">Photos</Link>
            <Link to="/bio">Bio</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
