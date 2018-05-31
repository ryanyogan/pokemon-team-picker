import React from 'react';
import { Query } from 'react-apollo';

import PokemonList from './PokemonList';
import ErrorMessage from '../Error';
import Loading from '../Loading';

import { GET_POKEMONS_QUERY } from './queries';

const Pokemon = () => (
  <Query query={GET_POKEMONS_QUERY} notifyOnNetworkStatusChange>
    {({ data, loading, error }) => {
      // Did we receive an error?
      if (error) {
        return <ErrorMessage error={error} />;
      }

      // No Error?  Okay let's destructure the pokemons array from the data object
      const { pokemons } = data;

      // Is Apollo still fetching the data?
      if (loading && !pokemons) {
        return <Loading loading={loading} />;
      }

      // Yay we have data!  Let's pass it to our PokemonList!
      return <PokemonList loading={loading} pokemons={pokemons} />;
    }}
  </Query>
);

export default Pokemon;
