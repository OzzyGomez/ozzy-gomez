import React, { Component } from 'react';
import classes from './Navbar.module.css';
import Container from '../Container';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Navbar extends Component {
	public render() {
		return (
			<header className={classes.header}>
				<Container>
					<div className={classes.container}>
						<div className={classes.name}>
							<Link to="/">OZZY GOMEZ</Link>
						</div>
						<nav className={classNames(classes.nav, classes.desktop)}>
							{/*<a href="https://youtube.com/ozzygomeztv">Videos</a>*/}
							<Link to="/videos">Videos</Link>
							<Link to="/music">Music</Link>
							<Link to="/photos">Photos</Link>
							<Link to="/bio">Bio</Link>
							<Link to="/contact">Contact</Link>
							<a href="http://saddestboi.com">Store</a>
						</nav>
					</div>
				</Container>
			</header>
		);
	}
}

export default Navbar;
