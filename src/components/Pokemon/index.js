import React from 'react';
import { Query } from 'react-apollo';

import PokemonList from './PokemonList';
import ErrorMessage from '../Error';
import Loading from '../Loading';

import { GET_POKEMONS_QUERY } from './queries';

// render prop strategy over HOC
// render prop pattern is where you pass in components as a prop
// to render in the main component

// can pass render or children to react component
// <Query render=() => <div/> /> this is JUST A this.props.render in Query
// ^ does not overwrite Query's render method

// <Query children=() => <div/> />
// =
// <Query> () => <div/> </Query>

const Pokemon = () => (
  // Query does the graphql querying for you that returns
  // data, loading, and error

  // Will not get loading if you don't pass this prop notifyOnNetworkStatusChange
  // Also gets what browsers, etc.
  <Query query={GET_POKEMONS_QUERY} notifyOnNetworkStatusChange>
    {({ data, loading, error }) => {
      if (error) {
        return <ErrorMessage error={error} />;
      }

      const { pokemons } = data;

      if (loading && !pokemons) {
        return <Loading loading={loading} />;
      }

      return <PokemonList pokemons={pokemons} />;
    }}
  </Query>
);

export default Pokemon;
