import React, { Component } from 'react';
import classNames from 'classnames';
import classes from './Container.module.css';

interface IProps {
	width?: 'xl' | 'lg' | 'md' | 'sm' | 'xs';
	children: any;
}

class Container extends Component<IProps> {
	public render() {
		const { width, children } = this.props;
		return (
			<div className={classNames(classes.container, classes[width || 'lg'])}>
				<div className="p-1">
					{children}
				</div>
			</div>
		);
	}
}

export default Container;
