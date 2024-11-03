import React, { HTMLProps } from 'react';
import PageTitle from '../PageTitle';
import Footer from '../Footer';
import clsx from 'clsx';

interface PageProps extends HTMLProps<HTMLDivElement> {
  titlePosition?: 'center' | 'left' | 'right';
  color?: 'black' | 'white';
}

const Page = ({
  children,
  className,
  titlePosition = 'center',
  color = 'black',
  ...props
}: PageProps) => {
  return (
    <div
      className={clsx(
        className,
        `text-${color}`,
        'container flex flex-col gap-16 py-8 min-h-dvh'
      )}
      {...props}
    >
      <div className={getTitleAlignment(titlePosition)}>
        <PageTitle title="OZZY GOMEZ" color={color} className="text-center" />
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

const getTitleAlignment = (position: 'center' | 'right' | 'left') => {
  switch (position) {
    case 'left':
      return 'text-center sm:text-left';
    case 'right':
      return 'text-center sm:text-right';
    default:
      return 'text-center sm:text-center';
  }
};

export default Page;
