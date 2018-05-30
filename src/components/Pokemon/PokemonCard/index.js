import React from 'react';
import { Box, Card, Flex, Modal, Button, FlexList } from '@procore/core-react';
import { Query } from 'react-apollo';

import Loading from '../../Loading';
import ErrorMessage from '../../Error';

import { GET_POKEMON_QUERY } from './queries';

const PokemonCard = ({ id, name, image }) => (
  <Box margin="md">
    <Card variant="hoverable" style={{ width: '200px' }}>
      <Box padding="md">
        <Flex direction="column">
          <Modal.State>
            {({ isShowing, show, hide }) => (
              <div>
                <img
                  alt={name}
                  src={image}
                  style={{ height: 75, width: 75, marginBottom: 10 }}
                  onClick={show}
                />
                <h4 className="capitalize">{name}</h4>

                <Modal open={isShowing} onClickOverlay={hide} placement="top">
                  <Modal.Header onClose={hide}>{name}</Modal.Header>
                  {isShowing && (
                    <Query
                      query={GET_POKEMON_QUERY}
                      notifyOnNetworkStatusChange
                      variables={{ id }}
                    >
                      {({ data, loading, error }) => {
                        if (error) {
                          return <ErrorMessage error={error} />;
                        }

                        const { pokemon } = data;

                        if (loading && !pokemon) {
                          return <Loading />;
                        }

                        return (
                          <Modal.Body>
                            <Flex direction="column">
                              <img
                                alt={name}
                                src={image}
                                style={{
                                  height: 100,
                                  width: 100,
                                  marginBottom: 20,
                                }}
                              />
                            </Flex>
                            <strong>Classification</strong>
                            <FlexList
                              size="sm"
                              direction="column"
                              alignItems="flex-start"
                            >
                              <span>{pokemon.classification}</span>
                            </FlexList>
                            <strong>Weaknesses</strong>
                            <FlexList
                              size="sm"
                              direction="column"
                              alignItems="flex-start"
                            >
                              {pokemon.weaknesses.map((weakness, idx) => (
                                <span key={idx}>{weakness}</span>
                              ))}
                            </FlexList>
                          </Modal.Body>
                        );
                      }}
                    </Query>
                  )}
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
              </div>
            )}
          </Modal.State>
        </Flex>
      </Box>
    </Card>
  </Box>
);

export default PokemonCard;
