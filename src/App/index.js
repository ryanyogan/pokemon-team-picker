import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';

import PokemonList from '../components/Pokemon';
import Team from '../components/Team';
import Arena from '../components/Arena';

import * as routes from '../constants/routes';

import './style.css';
// Fragment eliminates the need to wrap multiple components with <div></div>
// Fragment eliminates creating multiple DOM elements behind the scene
// https://javascriptplayground.com/react-fragments/
const Routes = () => (
  <Fragment>
    <Route
      exact
      path={routes.POKEMON_LIST}
      component={() => (
        <div className="App-content_small-header">
          <PokemonList />
        </div>
      )}
    />

    <Route
      exact
      path={routes.MY_TEAM}
      component={() => (
        <div className="App-content_small-header">
          <Team />
        </div>
      )}
    />

    <Route
      exact
      path={routes.ARENA}
      component={() => (
        <div className="App-content_small-header">
          <Arena />
        </div>
      )}
    />
  </Fragment>
);

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />

          <div className="App-main">
            <Routes />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
