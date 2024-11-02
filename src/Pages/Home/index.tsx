import React from 'react';
// import classes from './Home.module.css';
import Page from '../../Components/Page';
import MoonImage from '../../Assets/moon.jpeg';

const Home = () => {
  return (
    <div>
      <div
        className="relative h-screen w-screen overflow-hidden flex"
        // TODO: delete when video is added
        style={{
          background: `url(${MoonImage}) no-repeat center center/cover `,
        }}
      >
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
        <Page titlePosition="start" color="white" />
      </div>
    </div>
  );
};

export default Home;
