import React, { HTMLProps } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Button from '../Button';

export interface PageTitleProps extends HTMLProps<HTMLDivElement> {
  title: string;
}

const PageTitle = ({ title, className, ...props }: PageTitleProps) => {
  return (
    <div
      className={clsx(className, 'inline-flex flex-col items-start gap-4')}
      {...props}
    >
      <div>
        <Link to="/">
          <div className="font-light tracking-widest text-inherit text-3xl sm:text-5xl">
            {title}
          </div>
        </Link>
      </div>
      <div className="flex w-full gap-2">
        <div className="flex-1">
          <Button size="sm" className="w-full" to="/about">
            About
          </Button>
        </div>
        <div className="flex-1">
          <Button size="sm" className="w-full" to="/projects">
            Projects
          </Button>
        </div>
        <div className="flex-1">
          <Button size="sm" className="w-full" to="/contact">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
