import React from 'react';
import { Flex, Page } from '@procore/core-react';
import { compose, withStateHandlers } from 'recompose';

import PokemonCard from '../PokemonCard';
import TeamSidebar from '../TeamSidebar';

import './style.css';

const PokemonList = ({ onTeamSelect, pokemons, team }) => (
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
    <TeamSidebar onTeamSelect={onTeamSelect} team={team} />
  </Page>
);

const initialState = ({ pokemons }) => ({
  pokemons,
  team: { name: '', pokemons: [] },
});
const stateHandlers = {
  onTeamSelect: () => team => {
    console.log('Team Selected', team);
    return {
      team: {
        id: team.id,
        name: team.name,
        pokemons: team.pokemons,
      },
    };
  },
};

export default compose(withStateHandlers(initialState, stateHandlers))(
  PokemonList,
);
