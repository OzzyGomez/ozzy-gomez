import React, { FC, HTMLProps } from 'react';
import classes from './Card.module.css';
import classNames from 'classnames';
import CardImage, { CardImageProps } from './CardImage';
import CardContent, { CardContentProps } from './CardContent';

export interface CardProps extends HTMLProps<HTMLDivElement> {
  noPadding?: boolean;
}

const Card: FC<CardProps> & {
  Image: FC<CardImageProps>;
  Content: FC<CardContentProps>;
} = ({ children, className, noPadding, ...props }) => {
  return (
    <div className={classNames(className)}>
      <div className={classNames('rounded-3xl')} {...props}>
        <div className={classNames({ 'p-8': !noPadding })}>{children}</div>
      </div>
    </div>
  );
};

Card.Image = CardImage;
Card.Content = CardContent;

export default Card;
