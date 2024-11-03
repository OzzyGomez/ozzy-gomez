import clsx from 'clsx';
import React, { ReactNode, HTMLProps } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ImageCardProps extends HTMLProps<HTMLDivElement> {
  image?: string;
  title?: string;
  subtitle?: string;
  aspectRatio?: number | string;
  description?: ReactNode;
  to?: LinkProps['to'];
}

const ImageCard = ({
  image = 'https://placehold.co/600x400',
  title,
  subtitle,
  to,
  aspectRatio = 4 / 5,
  description,
  className,
  ...props
}: ImageCardProps) => {
  const ImageCardBase = (
    <div
      className={clsx(
        className,
        'group rounded-3xl p-4 flex flex-col justify-end items-start relative overflow-hidden'
      )}
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
      {description && (
        <div className="p-4 hidden absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 group-hover:flex justify-center items-center text-white">
          {description}
        </div>
      )}
    </div>
  );

  return to ? <Link to={to}>{ImageCardBase}</Link> : ImageCardBase;
};

export default ImageCard;
