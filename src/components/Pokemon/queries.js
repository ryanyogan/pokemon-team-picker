import gql from 'graphql-tag';

// gql allows user to pass arguments
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

export { GET_POKEMON_QUERY, GET_AN_ERROR_QUERY };

// query getPokemon($id: String) {
//   pokemon(id:$id){
//     name
//   }
// }

// Can pass in variable
