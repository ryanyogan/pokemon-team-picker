import React from 'react';
import { Flex, Page } from '@procore/core-react';

import PokemonCard from '../PokemonCard';
import TeamSidebar from '../TeamSidebar';

import './style.css';

const PokemonList = ({ pokemons }) => (
  <Page className="PageHeight">
    <Page.Body className="PageBody">
      <div>
        <Flex direction="row" wrap="wrap">
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </Flex>
      </div>
    </Page.Body>
    <TeamSidebar />
  </Page>
);

export default PokemonList;
