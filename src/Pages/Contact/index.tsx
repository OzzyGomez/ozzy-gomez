import React from 'react';
import Container from '../../Components/Container';
import Button from '../../Components/Button';
import Card from '../../Components/Card';

const Contact = () => {
  return (
		<Container>
			<div className="page-title mb-1">Contact</div>
			<div className="d-flex">
				<div className="w-50">
					<Card>
						<div className="title mb-1">Email</div>
						<p>OzzyGomez94@gmail.com</p>
					</Card>
				</div>
			</div>
		</Container>
  );
}

export default Contact;
