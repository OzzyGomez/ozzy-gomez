import React from 'react';
import Page from '../../Components/Page';
import ImageCard from '../../Components/ImageCard';
import { tiles } from './constants';

const Photos = () => {
  return (
    <Page>
      <div className="grid grid-col-1 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tiles.map((info, index) => (
            <ImageCard
              key={index}
              image={info.image}
              description={info.description}
              title={info.title}
            />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Photos;
