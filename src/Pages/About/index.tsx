import React from 'react';
import Page from '../../Components/Page';
import ImageCard from '../../Components/ImageCard';
import ChicagoImage from '../../Assets/chicagodowntownchristmas.jpg';
import LosGuaposImage from '../../Assets/beach.jpg';
import LakeRun from '../../Assets/lake-run.jpeg';

const About = () => {
  return (
    <Page>
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
          <div className="flex justify-center items-center">
            <p>Vision</p>
          </div>
          <div className="relative">
            <ImageCard
              to="/photos"
              image={ChicagoImage}
              aspectRatio={6 / 5}
              className="h-96 -rotate-6 m-auto hover:z-10 hover:shadow-2xl"
            />
            <ImageCard
              to="/photos"
              image={LosGuaposImage}
              aspectRatio={6 / 5}
              className="h-96 rotate-6 m-auto hover:z-10 hover:shadow-2xl"
            />
            <ImageCard
              to="/photos"
              image={LakeRun}
              aspectRatio={6 / 5}
              className="h-96 -rotate-6 m-auto hover:z-10 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default About;
