import React from 'react';
import { Box, Card, Flex } from '@procore/core-react';

import PokemonModal from '../PokemonModal';
import './style.css';

const PokemonCard = ({ id, image, name }) => (
  <Box margin="md">
    <Card variant="hoverable" className="PokemonCard">
      <Box padding="md">
        <Flex direction="column">
          <PokemonModal id={id} image={image} name={name} />
        </Flex>
      </Box>
    </Card>
  </Box>
);

export default PokemonCard;
