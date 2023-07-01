import React from 'react';
import logo from '../assets/images/paw-name-logo.svg';

const Header = () => {
  return (
    <header>
      <nav className="w-full flex py-6 justify-between items-center navbar" aria-label="Global">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Pawsitive Pairings</span>
            <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
        </a>
      </nav>    
    </header>
  );
}

export default Header;
