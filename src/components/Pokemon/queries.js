import gql from 'graphql-tag';

const GET_POKEMON_QUERY = gql`
  {
    pokemons(first: 20) {
      id
      name
      image
      classification
    }
  }
`;

export { GET_POKEMON_QUERY };
