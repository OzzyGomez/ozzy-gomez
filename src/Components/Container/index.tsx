import React, { Component, FC, HTMLProps } from "react";
import classNames from "classnames";
import classes from "./Container.module.css";

interface ContainerProps extends HTMLProps<HTMLDivElement> {
  width?: "xl" | "lg" | "md" | "sm" | "xs";
  noPadding?: boolean;
}

const Container: FC<ContainerProps> = ({
  width,
  children,
  className,
  noPadding,
  ...props
}) => {
  return (
    <div
      className={classNames(
        classes.container,
        className,
        classes[width || "lg"]
      )}
      {...props}
    >
      <div className="h-full">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Container;
