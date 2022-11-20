import React, { FC, HTMLProps } from "react";
import classes from "./Button.module.css";
import classNames from "classnames";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  size?: "lg" | "md" | "sm";
  type?: "button" | "submit" | "reset";
}

const Button: FC<ButtonProps> = ({
  size = "md",
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(classes.root, className, [classes[size]])}
      {...props}
    />
  );
};

export default Button;
