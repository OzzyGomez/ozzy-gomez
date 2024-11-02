import React from 'react';
import Page from '../../Components/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lists } from './constants';
import ImageCard from '../../Components/ImageCard';
import ChicagoImage from '../../Assets/chicago.jpg';

const ChicagoRankings = () => {
  return (
    <Page>
      <ImageCard
        image={ChicagoImage}
        title="My Chicago Rankings"
        subtitle="List of my favorite things in Chicago ranked. Subject to change.
          Starting Fresh from 2024."
        aspectRatio="unset"
        className="mb-8 h-52"
      />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {lists.map((list) => (
          <div key={list.title}>
            <h3 className="text-2xl flex items-center gap-2 mb-2">
              <FontAwesomeIcon icon={list.icon} />
              {list.title}
            </h3>
            <ol className="list-decimal list-inside font-light">
              {list.items.map((item) => (
                <li key={item.name}>
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default ChicagoRankings;
