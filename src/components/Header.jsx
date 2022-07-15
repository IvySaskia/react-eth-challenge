import React from 'react';

const Header = ({ avatar, children, name, profession }) => {
  return (
    <div>
      <h1 className='Header-title'>{ name }</h1>
      <p className='Header-job-title'>{ profession }</p>
      { children }
    </div>
  );
};

export default Header;
