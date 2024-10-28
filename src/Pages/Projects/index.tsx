import React from 'react';
import Page from '../../Components/Page';
import ImageCard from '../../Components/ImageCard';
import { tiles } from './constants';

const Projects = () => {
  return (
    <Page>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tiles.map((info, index) => (
          <ImageCard
            key={index}
            to={info.to}
            image={info.image}
            aspectRatio={1}
            title={info.title}
          />
        ))}
      </div>
    </Page>
  );
};

export default Projects;
