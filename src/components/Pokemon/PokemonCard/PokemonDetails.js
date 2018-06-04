import React from 'react';
import { Header, Flex, FlexList } from '@procore/core-react';

const PokemonDetails = ({ name, image, classification, weaknesses }) => (
  <React.Fragment>
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
    <FlexList size="sm" direction="column" alignItems="flex-start">
      <br />
      <Header.H3>Classification</Header.H3>
      <small>{classification}</small>
      <Header.H3>Weaknesses</Header.H3>
      {weaknesses.map(weakness => <small key={weakness}>{weakness}</small>)}
    </FlexList>
  </React.Fragment>
);

export default PokemonDetails;
