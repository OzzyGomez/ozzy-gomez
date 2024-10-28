import React, { FC, HTMLProps } from "react";
import classNames from "classnames";

export interface CardContentProps extends HTMLProps<HTMLDivElement> {}

const CardContent: FC<CardContentProps> = ({ className, ...props }) => {
  return <div {...props} className={classNames(className)} />;
};

export default CardContent;
