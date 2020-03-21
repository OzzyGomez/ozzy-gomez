import React from 'react';
import Container from '../../Components/Container';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import SelfImage from '../../Assets/IMG_2914.jpg';
import Megaman from '../../Assets/megaman.gif';
import classNames from 'classnames';
import classes from './Home.module.css';

const Home = () => {
  return (
		<Container noPadding>
			<div className={classNames('d-flex', classes.container)}>
				<div className={classNames(classes.item)}>
					<Card>
						<img src={SelfImage} className="w-100" />
					</Card>
				</div>
				<div className={classNames(classes.item)}>
					<Card className="mb-1">
						<div className="page-title mb-1 text-center">Ozzy Gomez</div>
						<p className="text-center">Actor | Filmmaker | Designer | Developer | Creator</p>
					</Card>
					<Card className="mb-1">
						<div className="title mb-1">The Actor // Filmmaker</div>
						<p>
							I am an actor, writer, and director of short films and the occasional YouTube
							skit. Aspiring to working in the film industry someday.
						</p>
					</Card>
					<Card className="mb-1">
						<div className="title mb-1">The Designer // Developer</div>
						<p>
							I create clothing designs, instagram AR effects/filters, and web and mobile apps.
						</p>
					</Card>
					<Card noPadding className="d-none">
						<img src={Megaman} className="w-100 d-block" />
					</Card>
				</div>
			</div>
		</Container>
  );
}

export default Home;
