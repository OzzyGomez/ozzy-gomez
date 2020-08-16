import React from 'react';
import Container from '../../Components/Container';
import classes from './Bio.module.css';
import Card from '../../Components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Components/Button';
import classNames from 'classnames';
import ChicagoImage from '../../Assets/Chicago.jpg';

const Bio = () => {
  return (
		<div className="text-center">
			<Container>
				<div className="page-title m-1">Bio</div>
				<Button onClick={() => console.log('hello world')}> Coming Soon </Button>
			</Container>
		</div>
  );
}

export default Bio;
