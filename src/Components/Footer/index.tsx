import React, { Component } from 'react';
import classes from './Footer.module.css';
import Container from '../Container';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

class Footer extends Component {
	public render() {
		return (
			<footer className={classNames('text-center', classes.footer)}>
				<div className={classNames(classes.menu, 'd-flex', classes.mobile)}>
					<Link to="/" className={classNames(classes.link, 'w-100')}>
						<FontAwesomeIcon icon="home" />
					</Link>
					<a href="https://www.youtube.com/ozzygomeztv" className={classNames(classes.link, 'w-100')}>
						<FontAwesomeIcon icon="film" />
					</a>
					<Link to="/music" className={classNames(classes.link, 'w-100')}>
						<FontAwesomeIcon icon="music" />
					</Link>
					<a href="https://www.instagram.com/ozvision" className={classNames(classes.link, 'w-100')}>
						<FontAwesomeIcon icon="images" />
					</a>
					<Link to="/bio" className={classNames(classes.link, 'w-100')}>
						<FontAwesomeIcon icon="user" />
					</Link>
					<Link to="/contact" className={classNames(classes.link, 'w-100')}>
						<FontAwesomeIcon icon="address-book" />
					</Link>
					<a href="http://ozthreads.com/" className={classNames(classes.link, 'w-100')}>
						<FontAwesomeIcon icon="store" />
					</a>
				</div>
				<Container>
					<div className={classes.container}>
						<div>
							&copy; 2020 Ozzy Gomez
						</div>
						<div className={classes.social}>
							<a href="https://youtube.com/ozzygomeztv">
								<FontAwesomeIcon icon={['fab', 'youtube']} />
							</a>
							<a href="https://instagram.com/ozvision">
								<FontAwesomeIcon icon={['fab', 'instagram']} />
							</a>
							<a href="https://twitter.com/ozzygomez">
								<FontAwesomeIcon icon={['fab', 'twitter']} />
							</a>
						</div>
					</div>
				</Container>
			</footer>
		);
	}
}

export default Footer;
