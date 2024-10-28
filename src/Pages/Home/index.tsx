import React from 'react';
import classes from './Home.module.css';
import Footer from '../../Components/Footer';
import PageTitle from '../../Components/PageTitle';
import Page from '../../Components/Page';

const Home = () => {
  return (
    <div>
      <div className="relative h-screen w-screen overflow-hidden flex">
        <div className={classes['video-background']}>
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
        </div>
        <Page titlePosition="start" />
        {/* <div className="flex flex-1 flex-col container p-8">
          <div className="flex-1">
            <PageTitle title="OZZY GOMEZ" className="self-start" />
          </div>
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
