import React, { FC, HTMLProps } from 'react';
import classes from './IconButton.module.css';
import classNames from 'classnames';

export interface IconButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  size?: 'lg' | 'md' | 'sm';
  type?: 'button' | 'submit' | 'reset';
}

const IconButton: FC<IconButtonProps> = ({
  size = 'md',
  type = 'button',
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        'btn border-2 border-white text-white aspect-square',
        className,
        [classes[size]]
      )}
      {...props}
    />
  );
};

export default IconButton;
