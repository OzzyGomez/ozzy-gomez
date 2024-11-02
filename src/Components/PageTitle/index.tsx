import React, { HTMLProps } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Button from '../Button';

export interface PageTitleProps extends HTMLProps<HTMLDivElement> {
  title: string;
  color?: 'black' | 'white';
}

const PageTitle = ({ title, color, className, ...props }: PageTitleProps) => {
  return (
    <div
      className={clsx(className, 'inline-flex flex-col items-center gap-4')}
      {...props}
    >
      <div>
        <Link to="/">
          <div className="font-light tracking-widest text-inherit text-3xl sm:text-5xl hover:opacity-50">
            {title}
          </div>
        </Link>
      </div>
      <div className="flex w-full gap-2">
        <div className="flex-1">
          <Button size="sm" className="w-full" to="/about" color={color}>
            About
          </Button>
        </div>
        <div className="flex-1">
          <Button size="sm" className="w-full" to="/projects" color={color}>
            Projects
          </Button>
        </div>
        <div className="flex-1">
          <Button size="sm" className="w-full" to="/contact" color={color}>
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
