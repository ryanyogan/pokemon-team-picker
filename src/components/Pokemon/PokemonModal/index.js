import React, { Fragment } from 'react';
import { Query } from 'react-apollo';
import { Button, Flex, FlexList, Modal, Token } from '@procore/core-react';

import { GET_POKEMON_QUERY } from '../queries';

import './style.css';

const PokemonModal = ({ hide, id, image, isShowing, name }) =>
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
                    <img alt={name} className="PokemonModalImg" src={image} />
                    <FlexList direction="column" alignItems="flex-start">
                      <Token className="PokemonModalClassificationToken">
                        <Token.Label>{pokemon.classification}</Token.Label>
                      </Token>
                      {pokemon.weaknesses.map(weakness => (
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
                    <Button variant="primary" onClick={hide}>
                      Add To Team
                    </Button>
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
