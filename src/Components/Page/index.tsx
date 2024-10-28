import React, { HTMLProps } from 'react';
import PageTitle from '../PageTitle';
import Footer from '../Footer';
import clsx from 'clsx';

interface PageProps extends HTMLProps<HTMLDivElement> {
  titlePosition?: 'center' | 'start' | 'end';
}

const Page = ({
  children,
  className,
  titlePosition = 'center',
  ...props
}: PageProps) => {
  return (
    <div
      className={clsx(
        className,
        'container flex flex-col gap-16 py-8  min-h-screen'
      )}
      {...props}
    >
      <PageTitle
        title="OZZY GOMEZ"
        className={`text-black self-${titlePosition} text-center`}
      />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Page;
