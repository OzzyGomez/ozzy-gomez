import React from 'react';
import { tiles } from './constants';
import Page from '../../Components/Page';
import ImageCard from '../../Components/ImageCard';
import ChicagoImage from '../../Assets/chicago.jpg';
// import LosGuaposImage from '../../Assets/los-guapos.jpeg';

interface Tile {
  image?: string;
  title?: string;
  subtitle?: string;
}

const About = () => {
  return (
    <Page>
      <div className="flex flex-col gap-16">
        {/* <ImageCard image={ChicagoImage} aspectRatio={5 / 2} title="Chicago" /> */}
        <div className="text-center">
          <p>I'm from and currently live in Chicago.</p>
          <p>I run.</p>
          <p>I make videos.</p>
          <p>I cook & bake.</p>
          <p>What else do I add here? I'll add more later.</p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div className="flex justify-center items-center">
            <p>asdasdasd</p>
          </div>
          <ImageCard image={LosGuaposImage} aspectRatio={2 / 1} />
        </div> */}
        <div className="grid grid-col-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tiles.map((info: Tile, index) => (
              <ImageCard key={index} image={info.image} title={info.title} />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default About;
