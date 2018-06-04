import React from 'react';
import { Box, Card, Flex } from '@procore/core-react';

import PokemonModal from '../PokemonModal';
import './style.css';

const PokemonCard = ({ name, image }) => (
  <Box margin="md">
    <Card variant="hoverable" className="PokemonCard">
      <Box padding="md">
        <Flex direction="column">
          <PokemonModal image={image} name={name} />
        </Flex>
      </Box>
    </Card>
  </Box>
);

export default PokemonCard;
