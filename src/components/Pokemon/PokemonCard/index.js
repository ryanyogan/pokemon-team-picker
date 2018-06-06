import React from 'react';
import { Box, Card, Flex, Modal } from '@procore/core-react';

import PokemonModal from '../PokemonModal';
import './style.css';

const PokemonCard = ({ id, image, name }) => (
  <Box margin="md">
    <Card variant="hoverable" className="PokemonCard">
      <Box padding="md">
        <Flex direction="column" alignItems="center">
          <Modal.State>
            {({ isShowing, show, hide }) => (
              <div>
                <img
                  alt={name}
                  className="PokemonCardImg"
                  src={image}
                  onClick={show}
                />
                <h4 className="capitalize">{name}</h4>
                <PokemonModal
                  hide={hide}
                  id={id}
                  image={image}
                  isShowing={isShowing}
                  name={name}
                />
              </div>
            )}
          </Modal.State>
        </Flex>
      </Box>
    </Card>
  </Box>
);

export default PokemonCard;
