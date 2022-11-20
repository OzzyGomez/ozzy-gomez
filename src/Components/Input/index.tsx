import classNames from "classnames";
import React, { FC, HTMLProps } from "react";
import classes from "./Input.module.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({ label, className, ...props }) => {
  return (
    <div className={classNames(classes.root, className)}>
      {label && <label className={classes.label}>{label}</label>}
      <input className={classes.input} {...props} />
    </div>
  );
};

export default Input;
