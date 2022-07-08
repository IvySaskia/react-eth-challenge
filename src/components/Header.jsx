import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <h1 className='Header-title'>Header-title</h1>
        <p className='Header-job-title'>Header-job-title</p>
        { children }
      </div>
    );
  }
}

export default Header;
