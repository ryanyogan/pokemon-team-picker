import React from 'react';

import Link from '../../components/Link';

import './style.css';

const Footer = () => (
  <div className="Footer">
    <div>
      <small>
        <span className="Footer-text">Built by Procore Pokemon Fans</span>{' '}
        <span className="Footer-text">with &hearts;</span>
      </small>
    </div>
    <div>
      <small>
        <Link
          className="Footer-link"
          href="https://intro-to-graphql.ryanyogan.com"
        >
          Class Materials and Portal
        </Link>{' '}
        <span className="Footer-text">.</span>
      </small>
    </div>
  </div>
);

export default Footer;
