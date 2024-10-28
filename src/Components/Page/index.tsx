import React, { HTMLProps } from 'react';
import PageTitle from '../PageTitle';
import Footer from '../Footer';
import clsx from 'clsx';

interface PageProps extends HTMLProps<HTMLDivElement> {}

const Page = ({ children, className, ...props }: PageProps) => {
  return (
    <div className={clsx(className, 'py-16')} {...props}>
      <div className="container flex flex-col gap-16">
        <PageTitle
          title="OZZY GOMEZ"
          className="text-black self-center text-center"
        />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
