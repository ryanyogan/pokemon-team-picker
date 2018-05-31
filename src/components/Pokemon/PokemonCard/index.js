import React from 'react';
import { Box, Card, Flex, Modal, Button } from '@procore/core-react';
import { Query } from 'react-apollo';

import { GET_POKEMON_QUERY } from '../queries'; // Added this for your help

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
                  {/* Why do you think we need this line below? 
                    What happens when you remove it? */}
                  {isShowing && (
                    <Query query={GET_POKEMON_QUERY} variables={{}}>
                      {/* This seems like a good place to put the <Query /> */}

                      {/* Everything within this block will need the information 
                      about an individual Pokemon, how can we query one ? */}

                      <Modal.Header onClose={hide}>{name}</Modal.Header>
                      <Modal.Body>
                        <Flex direction="column">
                          <img
                            alt={name}
                            src={image}
                            style={{
                              height: 100,
                              width: 100,
                            }}
                          />
                        </Flex>
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
