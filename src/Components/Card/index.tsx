import React from 'react';
import classes from './Card.module.css';

interface IProps {
	children: any;
}

const Card = ({ children }: IProps) => {
  return (
		<div className={classes.card}>
			<div className={classes.content}>
				{children}
			</div>
		</div>
  );
}

export default Card;
