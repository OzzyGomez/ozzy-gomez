import React from 'react';
import { tiles } from './constants';
import Page from '../../Components/Page';
import ImageCard from '../../Components/ImageCard';

const About = () => {
  return (
    <Page>
      <ImageCard
        image="https://placehold.co/600x400"
        aspectRatio={5 / 2}
        title="TITLE HERE"
      />
      <div className="text-center py-16">Lorem Ipsum</div>
      <div className="grid grid-col-1 gap-4 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tiles.map((info, index) => (
            <ImageCard image={info.image} title={info.title} />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default About;
