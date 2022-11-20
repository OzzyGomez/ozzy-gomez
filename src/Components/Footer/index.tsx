import React, { FC, HTMLProps } from "react";
import classes from "./Footer.module.css";
import Container from "../Container";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  FiFilm,
  FiHome,
  FiImage,
  FiInstagram,
  FiMail,
  FiMusic,
  FiTwitter,
  FiUser,
  FiYoutube,
} from "react-icons/fi";
import { MdOutlineFastfood } from "react-icons/md";

interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer
      className={classNames("text-center", className, classes.footer)}
      {...props}
    >
      <div className={classNames(classes.menu, classes.mobile, "flex")}>
        <Link to="/" className={classNames(classes.link, "w-full")}>
          <FiHome />
        </Link>
        <Link to="/recipes" className={classNames(classes.link, "w-full")}>
          <MdOutlineFastfood />
        </Link>
        <Link to="/videos" className={classNames(classes.link, "w-full")}>
          <FiFilm />
        </Link>
        <Link to="/music" className={classNames(classes.link, "w-full")}>
          <FiMusic />
        </Link>
        <a
          href="https://www.instagram.com/ozvision"
          className={classNames(classes.link, "w-full")}
        >
          <FiImage />
        </a>
        <Link to="/bio" className={classNames(classes.link, "w-full")}>
          <FiUser />
        </Link>
        <Link to="/contact" className={classNames(classes.link, "w-full")}>
          <FiMail />
        </Link>
      </div>
      <Container>
        <div className={classes.container}>
          <div>&copy; 2020 Ozzy Gomez</div>
          <div className={classNames(classes.social, "flex")}>
            <a href="https://youtube.com/ozzygomeztv">
              <FiYoutube />
            </a>
            <a href="https://instagram.com/ozvision">
              <FiInstagram />
            </a>
            <a href="https://twitter.com/ozzygomez">
              <FiTwitter />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
