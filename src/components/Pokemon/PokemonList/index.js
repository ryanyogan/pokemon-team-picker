import React from 'react';
import { Page, Flex } from '@procore/core-react';

import PokemonCard from '../PokemonCard';

const PokemonList = ({ pokemons }) => (
  <Page>
    <Page.Body>
      <div style={{ width: '100%' }}>
        <Flex style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
        </Flex>
      </div>
    </Page.Body>
  </Page>
);

export default PokemonList;
