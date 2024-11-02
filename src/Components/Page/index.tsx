import React, { HTMLProps } from 'react';
import PageTitle from '../PageTitle';
import Footer from '../Footer';
import clsx from 'clsx';

interface PageProps extends HTMLProps<HTMLDivElement> {
  titlePosition?: 'center' | 'start' | 'end';
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
        'container flex flex-col gap-16 py-8  min-h-screen'
      )}
      {...props}
    >
      <div className={`text-${titlePosition}`}>
        <PageTitle title="OZZY GOMEZ" color={color} className={`text-center`} />
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
