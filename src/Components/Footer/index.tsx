import React, { Component } from 'react';
import classes from './Footer.module.css';
import Container from '../Container';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
	public render() {
		return (
			<footer className={classNames('text-center', classes.footer)}>
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
