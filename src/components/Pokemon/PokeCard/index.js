import React from 'react';
import { Box, Card, Flex, OverlayTrigger } from '@procore/core-react';

import PokemonPopup from '../PokemonPopup';

const PokeCard = ({ name, image, classification }) => (
  <Box margin="md">
    <Card variant="hoverable" style={{ width: '200px' }}>
      <OverlayTrigger
        trigger="hover"
        overlay={<PokemonPopup classification={classification} />}
      >
        <Box padding="md">
          <Flex direction="column">
            <img
              alt={name}
              src={image}
              style={{ height: 75, width: 75, marginBottom: 10 }}
            />
            <h4 className="capitalize">{name}</h4>
          </Flex>
        </Box>
      </OverlayTrigger>
    </Card>
  </Box>
);

export default PokeCard;
