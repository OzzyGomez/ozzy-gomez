import React, { FC, HTMLProps } from 'react';
import classes from './Button.module.css';
import IconButton, { IconButtonProps } from './IconButton';
import clsx from 'clsx';
import { Link, LinkProps } from 'react-router-dom';

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  size?: 'lg' | 'md' | 'sm';
  type?: 'button' | 'submit' | 'reset';
  to?: LinkProps['to'];
  color?: 'black' | 'white';
}

const Button: FC<ButtonProps> & { Icon: FC<IconButtonProps> } = ({
  size = 'md',
  type = 'button',
  className,
  to,
  color = 'black',
  ...props
}) => {
  const buttonBase = (
    <button
      type={type}
      className={clsx(
        className,
        [classes[size]],
        getButtonColor(color),
        `btn border-2 p-2 hover:opacity-50`
      )}
      {...props}
    />
  );

  return to ? <Link to={to}>{buttonBase}</Link> : buttonBase;
};

Button.Icon = IconButton;

const getButtonColor = (color: ButtonProps['color']) => {
  switch (color) {
    case 'black':
      return 'text-black border-black';
    case 'white':
      return 'text-white border-white';
    default:
      return 'text-black border-black';
  }
};

export default Button;
