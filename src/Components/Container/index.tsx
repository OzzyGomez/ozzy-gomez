import React, { Component } from 'react';
import classNames from 'classnames';
import classes from './Container.module.css';

interface IProps {
	width?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
	children: any;
	className?: string;
	noPadding?: boolean;
}

class Container extends Component<IProps> {
	public render() {
		const { width, children, className, noPadding } = this.props;
		return (
			<div className={classNames(classes.container, className, classes[width || 'lg'])}>
				<div className="h-100">
					<div className="p-1">
						{children}
					</div>
				</div>
			</div>
		);
	}
}

export default Container;
