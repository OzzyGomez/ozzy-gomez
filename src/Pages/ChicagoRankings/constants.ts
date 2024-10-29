import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface List {
  icon: IconProp;
  title: string;
  items: Array<{ name: string; link: string }>;
}

export const lists: List[] = [
  {
    icon: 'burger',
    title: 'Burgers',
    items: [
      {
        name: 'Au Cheval',
        link: 'https://auchevaldiner.com/chicago/',
      },
      {
        name: "Mott's Street",
        link: 'https://www.mottstreetchicago.com/',
      },
      {
        name: 'Small Cheval',
        link: 'https://smallcheval.com/',
      },
    ],
  },
  {
    icon: 'pizza-slice',
    title: 'Pizza',
    items: [
      {
        name: "Phil's Pizza",
        link: 'https://g.co/kgs/36UAEcL',
      },
      {
        name: "Ricobene's",
        link: 'https://www.ricobenespizza.com/',
      },
    ],
  },
  {
    icon: 'person-running',
    title: 'Running Locations',
    items: [
      {
        name: 'Chicago Lakefront Trail',
        link: 'https://www.chicagoparkdistrict.com/parks-facilities/lakefront-trail',
      },
    ],
  },
  // {
  //   icon: 'person-running',
  //   title: 'Running Locations',
  //   items: [
  //     {
  //       name: 'Chicago Lakefront Trail',
  //       link: 'https://www.chicagoparkdistrict.com/parks-facilities/lakefront-trail',
  //     },
  //   ],
  // },
];
