import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation

const Header = () => {
  return (
    <header>
      <nav>
        <div className='nav-bar'>
          <img src="/LOGO.png" alt="Logo" className="logo" />
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">A propos</Link></li>
              {/* <li><Link to="/housing-files">Housing Files</Link></li> */}
            </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
