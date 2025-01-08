import LakeRunImage from '../../Assets/lake-run.jpeg';
import MoonImage from '../../Assets/moon.jpeg';
import NikeRunImage from '../../Assets/nike-run.jpeg';
import RunOutfitImage from '../../Assets/run-outfit.jpeg';
import BeachImage from '../../Assets/beach.jpg';
import BlackAndWhiteImage from '../../Assets/blackandwhite.jpg';
import DowntownChicagoImage from '../../Assets/chicagodowntownchristmas.jpg';
import React, { ReactNode } from 'react';

export interface Tile {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: ReactNode;
}

export const tiles: Tile[] = [
  {
    image: LakeRunImage,
    description: (
      <div>
        <h1>Running on the lakefront in the summer.</h1>
      </div>
    ),
  },
  {
    image: MoonImage,
    description: (
      <div>
        <h1>Picnic at the park.</h1>
      </div>
    ),
  },
  {
    image: NikeRunImage,
    description: (
      <div>
        <h1>Nike run event for the 13.1 Bank of America Half Marathon.</h1>
        <p>3 miles followed by food, drinks and music.</p>
      </div>
    ),
  },
  {
    image: RunOutfitImage,
    description: (
      <div>
        <h1>Just a casual running outfit. Felt cute might delete later.</h1>
      </div>
    ),
  },
  {
    image: BeachImage,
    description: (
      <div>
        <h1>Walking down Malibu beach.</h1>
      </div>
    ),
  },
  {
    image: BlackAndWhiteImage,
    description: (
      <div>
        <h1>Just a super candidate photo.</h1>
      </div>
    ),
  },
  {
    image: DowntownChicagoImage,
    description: (
      <div>
        <h1>Downtown Chicago in December.</h1>
      </div>
    ),
  },
];
