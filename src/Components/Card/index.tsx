import React from 'react';
import classes from './Card.module.css';
import classNames from 'classnames';

interface IProps {
	className?: string;
	children: any;
}

const Card = ({ children, className }: IProps) => {
  return (
		<div className={classNames(classes.card, className)}>
			<div className={classes.content}>
				{children}
			</div>
		</div>
  );
}

export default Card;
