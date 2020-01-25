import React from 'react';
import classes from './Button.module.css';
import classNames from 'classnames';

interface IProps {
	children: any;
	onClick: () => any;
	size?: 'lg' | 'md' | 'sm'
}

const Button = ({ children, onClick, size }: IProps) => {
  return (
		<button className={classNames(classes.button, classes[size || 'md'])} onClick={onClick}>
			{children}
		</button>
  );
}

export default Button;
