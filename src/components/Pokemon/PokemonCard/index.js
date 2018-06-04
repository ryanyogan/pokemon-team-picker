import React from 'react';
import { Box, Card, Flex, Modal, Button } from '@procore/core-react';
import { Query } from 'react-apollo';

import { GET_POKEMON_QUERY } from '../queries'; // Added this for your help
import PokemonDetails from './PokemonDetails';

// Notice that we removed the OverlayTrigger, we do not want
// that ToolTop (PokemonPopup) anymore, we can do better!

// Wow this file is going to get big, and it is handling multiple concerns.
// Can you think of a way to break this down into reusable components?
// Give it a try, there is no possible way to fail, you are learning!

// Notie we have added id, this may be helpful to lookup the pokemon!
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
                  {/* Why do you think we need this line below? "isShowing && ("
                    What happens when you remove it?
                    ANSWER: Without it, all detail queries will run the cards are loaded */}
                  {isShowing && (
                    <Query query={GET_POKEMON_QUERY} variables={{ id }}>
                      {({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) return `Error!: ${error}`;

                        return (
                          <React.Fragment>
                            <Modal.Header onClose={hide}>{name}</Modal.Header>
                            <Modal.Body>
                              <PokemonDetails
                                key={data.pokemon.id}
                                name={name}
                                image={image}
                                classification={data.pokemon.classification}
                                weaknesses={data.pokemon.weaknesses}
                              />
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
                          </React.Fragment>
                        );
                      }}
                    </Query>
                  )}
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
