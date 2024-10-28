import React, { HTMLProps } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ImageCardProps extends HTMLProps<HTMLDivElement> {
  image?: string;
  title?: string;
  subtitle?: string;
  aspectRatio?: number;
  to?: LinkProps['to'];
}

const ImageCard = ({
  image = 'https://placehold.co/600x400',
  title,
  subtitle,
  to,
  aspectRatio = 4 / 5,
  ...props
}: ImageCardProps) => {
  const ImageCardBase = (
    <div
      className="rounded-3xl p-4 flex flex-col justify-end items-start"
      style={{
        background: `url(${image}) no-repeat center center/cover`,
        aspectRatio,
      }}
      {...props}
    >
      {title && <h2 className="text-4xl text-white">{title}</h2>}
      {subtitle && (
        <h3 className="font-light text-neutral-200 italic">{subtitle}</h3>
      )}
    </div>
  );

  return to ? <Link to={to}>{ImageCardBase}</Link> : ImageCardBase;
};

export default ImageCard;
