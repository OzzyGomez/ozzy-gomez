import React from 'react';
import Container from '../../Components/Container';
import Button from '../../Components/Button';

const Music = () => {
  return (
		<div className="text-center">
			<Container>
				<div className="page-title m-1">Music</div>
				<Button onClick={() => console.log('hello world')}> Coming Soon </Button>
			</Container>
		</div>
  );
}

export default Music;
