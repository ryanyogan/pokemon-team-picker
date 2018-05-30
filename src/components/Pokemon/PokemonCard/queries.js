import gql from 'graphql-tag';

const GET_POKEMON_QUERY = gql`
  query($id: String, $name: String) {
    pokemon(id: $id, name: $name) {
      id
      name
      classification
      weight {
        minimum
        maximum
      }
      weaknesses
    }
  }
`;

export { GET_POKEMON_QUERY };
