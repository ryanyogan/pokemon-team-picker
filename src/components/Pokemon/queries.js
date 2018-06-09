import gql from 'graphql-tag';

const GET_POKEMON_QUERY = gql`
  query getPokemon($id: ID!) {
    pokemon: Pokemon(id: $id) {
      classification
      damages {
        normal
        fire
        water
        electric
        grass
        ice
        fight
        poison
        ground
        flying
        psychic
        bug
        rock
        ghost
        dragon
        dark
        steel
      }
    }
  }
`;

const GET_POKEMONS_QUERY = gql`
  {
    pokemons: allPokemons(limit: 50) {
      id
      name
      img
    }
  }
`;

const GET_AN_ERROR_QUERY = gql`
  {
    pokemons(first: 10) {
      id
      name
      image
      classification
      foobar # This better not exist!
    }
  }
`;

export { GET_POKEMON_QUERY, GET_POKEMONS_QUERY, GET_AN_ERROR_QUERY };
