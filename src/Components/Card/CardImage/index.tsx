import React, { FC, HTMLProps } from "react";
import classNames from "classnames";

export interface CardImageProps extends HTMLProps<HTMLImageElement> {
  crossOrigin?: "" | "anonymous" | "use-credentials"; // Overriding for typescript error
}

const CardImage: FC<CardImageProps> = ({ className, ...props }) => {
  return (
    <img
      {...props}
      className={classNames(className, "aspect-square object-cover")}
    />
  );
};

export default CardImage;
