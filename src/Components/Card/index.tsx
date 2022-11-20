import React, { FC, HTMLProps } from "react";
import classes from "./Card.module.css";
import classNames from "classnames";

interface CardProps extends HTMLProps<HTMLDivElement> {
  noPadding?: boolean;
}

const Card: FC<CardProps> = ({ children, className, noPadding, ...props }) => {
  return (
    <div className={classNames(classes.card, className)} {...props}>
      <div className={classNames({ "p-4": !noPadding })}>{children}</div>
    </div>
  );
};

export default Card;
