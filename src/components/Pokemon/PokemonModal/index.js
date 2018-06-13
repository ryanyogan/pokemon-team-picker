import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { Button, FlexList, Modal, Token } from '@procore/core-react';

import { GET_POKEMON_QUERY, UPDATE_TEAMS_MUTATION } from '../queries';

import './style.css';

const returnWeaknesses = damages =>
  Object.keys(damages).filter(type => damages[type] > 1);

const handleData = ({ addPokemon, hide, pokemon }) => {
  addPokemon(pokemon);
  hide();
};

const PokemonModal = ({ addPokemon, hide, id, img, isShowing, name, team }) =>
  isShowing && (
    <Query query={GET_POKEMON_QUERY} variables={{ id }}>
      {({ data, error }) => {
        const { pokemon } = data;
        return (
          <div>
            {pokemon && (
              <Modal open={isShowing} onClickOverlay={hide} placement="top">
                <Modal.Header onClose={hide}>{name}</Modal.Header>
                <Modal.Body>
                  <FlexList direction="column" alignItems="center">
                    <img alt={name} className="PokemonModalImg" src={img} />
                    <FlexList direction="column" alignItems="flex-start">
                      <Token className="PokemonModalClassificationToken">
                        <Token.Label>{pokemon.classification}</Token.Label>
                      </Token>
                      {returnWeaknesses(pokemon.damages).map(weakness => (
                        <Token
                          key={weakness}
                          className="PokemonModalWeaknessToken"
                        >
                          <Token.Label>{weakness}</Token.Label>
                        </Token>
                      ))}
                    </FlexList>
                  </FlexList>
                </Modal.Body>
                <Modal.Footer>
                  <Modal.FooterButtons>
                    <Button variant="tertiary" onClick={hide}>
                      Cancel
                    </Button>
                    <Mutation mutation={UPDATE_TEAMS_MUTATION}>
                      {(updateTeam, { data }) => {
                        const newPokemons = team.pokemons.map(
                          pokemon => pokemon.id,
                        );
                        newPokemons.push(id);
                        data &&
                          handleData({
                            addPokemon,
                            hide,
                            pokemon: { ...pokemon, id, img, name },
                          });
                        return (
                          <Button
                            variant="primary"
                            onClick={() =>
                              updateTeam({
                                variables: {
                                  input: {
                                    id: team.id,
                                    name: team.name,
                                    pokemons: newPokemons,
                                  },
                                },
                              })
                            }
                          >
                            Add To Team
                          </Button>
                        );
                      }}
                    </Mutation>
                  </Modal.FooterButtons>
                </Modal.Footer>
              </Modal>
            )}
          </div>
        );
      }}
    </Query>
  );

export default PokemonModal;
