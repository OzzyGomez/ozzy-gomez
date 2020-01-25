import React from 'react';
import Container from '../../Components/Container';
import Video from '../../Components/Video';
import classes from './Videos.module.css';
import Button from '../../Components/Button';

const Videos = () => {
  return (
		<div>
			<div className="text-center">
				<Container>
					<div className="page-title m-1">Videos</div>
					<Button onClick={() => console.log('hello world')}> Coming Soon </Button>
				</Container>
			</div>
			{/*<div className={classes.hero}>
				<Container>
					<div className="d-flex">
						<div className="w-50">
							<Video youtubeUrl="https://www.youtube.com/embed/M7lc1UVf-VE" autoPlay />
						</div>
						<div className="w-50">

						</div>
					</div>
				</Container>
			</div>*/}
		</div>
  );
}

export default Videos;
