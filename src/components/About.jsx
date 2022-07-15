import React from 'react';

const About = ({address, email, phone, website}) => {

  return (
    <div>
      <h1 className='About-title'>About Me</h1>
      <div>
        <ul>
          <li className='About-item'>{phone}</li>
          <li className='About-item'>{email}</li>
          <li className='About-item'>{website}</li>
          <li className='About-item'>{address}</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
