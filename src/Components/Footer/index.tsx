import React, { HTMLProps } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface FooterProps extends HTMLProps<HTMLDivElement> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={clsx(className, 'text-center font-lg')} {...props}>
      <div>
        <div className="flex justify-between items-center">
          <div>&copy; {new Date().getFullYear()} Ozzy Gomez</div>
          <div className="flex gap-6">
            <Link className="" to="/contact">
              <FontAwesomeIcon icon="envelope" size="lg" />
            </Link>
            <a href="https://www.strava.com/athletes/61524944" title="Strava">
              <FontAwesomeIcon icon={['fab', 'strava']} size="lg" />
            </a>
            <a href="https://youtube.com/ozzygomeztv" title="YouTube">
              <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />
            </a>
            <a href="https://instagram.com/ozvision" title="Instagram">
              <FontAwesomeIcon icon={['fab', 'instagram']} size="lg" />
            </a>
            <a href="https://tiktok.com/@ozzygomez" title="TikTok">
              <FontAwesomeIcon icon={['fab', 'tiktok']} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
