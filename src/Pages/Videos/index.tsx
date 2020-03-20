import React from 'react';
import Container from '../../Components/Container';
import Video from '../../Components/Video';
import classes from './Videos.module.css';
import Button from '../../Components/Button';
import Blur from '../../Assets/blur.mov';
import Stars from '../../Assets/stars.mov';
import Fruit from '../../Assets/fruit.mov';

const Videos = () => {
  return (
		<Container>
			<div className="page-title mb-1">Videos</div>
			<div className="page-subtitle mb-1">A few of my Instagram AR Effects!</div>
			<div className="d-flex">
				<div className="w-25 p-1">
					<Video
						src={Blur}
						autoPlay
						loop
						muted
						link="https://www.instagram.com/a/r/?effect_id=204694140903586"
					/>
				</div>
				<div className="w-25 p-1">
					<Video
						src={Fruit}
						autoPlay
						loop
						muted
						link="https://www.instagram.com/a/r/?effect_id=599721214176350"
					/>
				</div>
				<div className="w-25 p-1">
					<Video
						src={Stars}
						autoPlay
						loop
						muted
						link="https://www.instagram.com/a/r/?effect_id=204694140903586"
					/>
				</div>
				<div className="w-25 p-1">
					<Video
						src={Stars}
						autoPlay
						loop
						muted
						link="https://www.instagram.com/a/r/?effect_id=204694140903586"
					/>
				</div>
			</div>
		</Container>
  );
}

export default Videos;
