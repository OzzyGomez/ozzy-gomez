import React from "react";
import Container from "../../Components/Container";
import classes from "./Home.module.css";
import classNames from "classnames";

const Home = () => {
  return (
    <div className={classNames("text-center", classes.root)}>
      {/* <div className={classes['video-background']}>
				<div className={classes['video-foreground']}>
					<iframe
						title="video"
						width="560"
						height="315"
						src="https://www.youtube.com/embed/rIjg3qyDkQs?controls=0&rel=0&autoplay=1&loop=1&mute=1&&showinfo=0&playlist=rIjg3qyDkQs"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</div> */}
      {/* <Container>
        <div>Welcome Ozzy Gomez</div>
      </Container> */}
    </div>
  );
};

export default Home;
