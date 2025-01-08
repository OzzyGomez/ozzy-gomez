import React from 'react';
import Page from '../../Components/Page';

const ContactInfo = [
  {
    label: 'CONTACT ME',
    value: 'contact@ozzygomez.com',
  },
];

const Contact = () => {
  return (
    <Page>
      <div className="flex flex-1">
        <div className="flex flex-1 flex-col justify-center items-center gap-10">
          {ContactInfo.map((info) => (
            <div className="flex flex-col items-center">
              <div className="font-light text-black text-md">{info.label}</div>
              <div className="font-light text-2xl">{info.value}</div>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Contact;
