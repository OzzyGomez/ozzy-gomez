import React from 'react';
// import classes from './Home.module.css';
import Page from '../../Components/Page';
import MoonImage from '../../Assets/moon.jpeg';

const Home = () => {
  return (
    <div>
      {/* TODO: delete when video is added */}
      <div
        className="fixed top-0 left-0 w-screen h-screen -z-50"
        style={{
          background: `url(${MoonImage}) no-repeat center center/cover `,
        }}
      />
      <div className="relative h-dvh w-dvh overflow-hidden flex">
        {/* <div className={classes['video-background']}>
          <div className={classes['video-foreground']}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kmSD990jyII?controls=0&rel=0&autoplay=1&loop=1&mute=1&showinfo=0&playlist=kmSD990jyII"
              title="video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div> */}
        <Page titlePosition="left" color="white" />
      </div>
    </div>
  );
};

export default Home;
