import React from 'react';
import Container from '../../Components/Container';
import classes from './Bio.module.css';
import Card from '../../Components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Components/Button';
import classNames from 'classnames';

const Bio = () => {
  return (
		<Container>
			<div className="page-title mb-1">Bio</div>
			<div className={classNames('d-flex', classes.container)}>
				<div className={classes.item}>
					<Card>
						<div className="title">Chicago, IL (South Side)</div>
						<p>Grew up on the south side of Chicago.</p>
					</Card>
				</div>
			</div>
		</Container>
  );
}

export default Bio;
