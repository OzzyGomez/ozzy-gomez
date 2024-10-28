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
}

const Button: FC<ButtonProps> & { Icon: FC<IconButtonProps> } = ({
  size = 'md',
  type = 'button',
  className,
  to,
  ...props
}) => {
  const buttonBase = (
    <button
      type={type}
      className={clsx(
        className,
        [classes[size]],
        'btn border-2 border-black p-2 hover:opacity-50'
      )}
      {...props}
    />
  );

  return to ? <Link to={to}>{buttonBase}</Link> : buttonBase;
};

Button.Icon = IconButton;

export default Button;
