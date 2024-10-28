import React from 'react';
import Page from '../../Components/Page';

const ChicagoRankings = () => {
  return (
    <Page>
      <div className="text-center mb-12">
        <h2 className="text-2xl">My Chicago Rankings</h2>
        <h3 className="text-lg">
          List of my favorite things in Chicago ranked. Subject to change.
          Starting Fresh from 2024.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div>
          <h3 className="text-2xl">Burger Places</h3>
          <ol className="list-decimal list-inside">
            <li>
              <a href="https://auchevaldiner.com/chicago/">Au Cheval</a>
            </li>
            <li>
              <a href="https://www.mottstreetchicago.com/">Mott's Street</a>
            </li>
            <li>
              <a href="https://smallcheval.com/">Small Cheval</a>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-2xl">Pizza Places</h3>
          <ol className="list-decimal list-inside">
            <li>
              <a href="https://g.co/kgs/36UAEcL">Phil's Pizza</a>
            </li>
            <li>
              <a href="https://www.ricobenespizza.com/">Ricobene's</a>
            </li>
          </ol>
        </div>
        <div>
          <h3 className="text-2xl">Running Locations</h3>
          <ol className="list-decimal list-inside">
            <li>
              <a href="https://www.chicagoparkdistrict.com/parks-facilities/lakefront-trail">
                Chicago Lakefront Trail
              </a>
            </li>
          </ol>
        </div>
      </div>
    </Page>
  );
};

export default ChicagoRankings;
