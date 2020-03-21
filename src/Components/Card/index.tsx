import React from 'react';
import classes from './Card.module.css';
import classNames from 'classnames';

interface IProps {
	className?: string;
	children: any;
	noPadding?: boolean;
}

const Card = ({ children, className, noPadding }: IProps) => {
  return (
		<div className={classNames(classes.card, className)}>
			<div className={classNames({ 'p-1': !noPadding })}>
				{children}
			</div>
		</div>
  );
}

export default Card;
