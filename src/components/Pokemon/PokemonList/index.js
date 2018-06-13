import React from 'react';
import { Flex, Page, Toast } from '@procore/core-react';
import { compose, withStateHandlers } from 'recompose';

import PokemonCard from '../PokemonCard';
import TeamSidebar from '../TeamSidebar';

import './style.css';

const PokemonList = ({
  addPokemon,
  addPokemonError,
  onTeamSelect,
  pokemons,
  team,
}) => (
  <Page className="PageHeight">
    <Page.Body className="PageBody">
      <Flex direction="column" alignItems="center">
        <Flex direction="row" wrap="wrap">
          {pokemons.map(pokemon => (
            <PokemonCard
              addPokemon={addPokemon}
              key={pokemon.id}
              team={team}
              {...pokemon}
            />
          ))}
        </Flex>
        {addPokemonError && (
          <Toast variant="error">
            Your team may only have 6 Pokemons, Please remove one first!
          </Toast>
        )}
      </Flex>
    </Page.Body>
    <TeamSidebar onTeamSelect={onTeamSelect} team={team} />
  </Page>
);

const initialState = ({ pokemons }) => ({
  addPokemonError: false,
  pokemons,
  team: { name: '', pokemons: [] },
});
const stateHandlers = {
  onTeamSelect: () => team => ({
    team: {
      id: team.id,
      name: team.name,
      pokemons: team.pokemons,
    },
  }),
  addPokemon: ({ team }) => pokemon => {
    let addPokemonError;
    const pokemons = [...team.pokemons];
    if (pokemons.length < 6) {
      addPokemonError = false;

      pokemons.push(pokemon);
    } else {
      addPokemonError = true;
    }
    return {
      addPokemonError,
      team: {
        id: team.id,
        name: team.name,
        pokemons,
      },
    };
  },
};

export default compose(withStateHandlers(initialState, stateHandlers))(
  PokemonList,
);
