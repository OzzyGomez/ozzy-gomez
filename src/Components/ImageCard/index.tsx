import React, { HTMLProps } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ImageCardProps extends HTMLProps<HTMLDivElement> {
  image: string;
  title?: string;
  aspectRatio?: number;
  to?: LinkProps['to'];
}

const ImageCard = ({
  image,
  title,
  to,
  aspectRatio = 4 / 5,
  ...props
}: ImageCardProps) => {
  const ImageCardBase = (
    <div
      className="cursor-pointer rounded-3xl p-4 flex justify-start items-end"
      style={{
        background: `url(${image}) no-repeat center center/cover`,
        aspectRatio,
      }}
      {...props}
    >
      {title && <h2 className="text-4xl text-white uppercase">{title}</h2>}
    </div>
  );

  return to ? <Link to={to}>{ImageCardBase}</Link> : ImageCardBase;
};

export default ImageCard;
