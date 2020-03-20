import React from 'react';
import Container from '../../Components/Container';
import Button from '../../Components/Button';
import Card from '../../Components/Card';
import SelfImage from '../../Assets/IMG_2914.jpg';
import classNames from 'classnames';
import classes from './Home.module.css';

const Home = () => {
  return (
		<Container noPadding>
			<div className={classNames('d-flex', classes.container)}>
				<div className={classNames(classes.item)}>
					<Card className="m-1">
						<img src={SelfImage} className="w-100" />
					</Card>
				</div>
				<div className={classNames(classes.item)}>
					<Card className="m-1">
						<div className="page-title mb-1 text-center">Ozzy Gomez</div>
						<p className="text-center">Actor | Filmmaker | Designer | Developer</p>
					</Card>
					<Card className="m-1">
						<div className="title mb-1">The Actor // Filmmaker</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
							elementum felis tortor, quis vehicula lorem posuere id.
						</p>
					</Card>
					<Card className="m-1">
						<div className="title mb-1">The Designer // Developer</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
							elementum felis tortor, quis vehicula lorem posuere id.
						</p>
					</Card>
				</div>
			</div>
		</Container>
  );
}

export default Home;
