import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';

import './style.css';

const Navigation = () => (
  <header className="Navigation">
    <div className="Navigation-link">
      <Link to={routes.POKEMON_LIST}>Pokemon List</Link>
    </div>
    <div className="Navigation-link">
      <Link to={routes.MY_TEAM}>My Team</Link>
    </div>
    <div className="Navigation-link">
      <Link to={routes.ARENA}>Battle Arena</Link>
    </div>
  </header>
);

export default Navigation;
