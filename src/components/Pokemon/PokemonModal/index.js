import React from 'react';
import { Flex, Modal, Button } from '@procore/core-react';

import './style.css';

const PokemonModal = ({ hide, id, image, isShowing, name }) => (
  <div>
    <Modal open={isShowing} onClickOverlay={hide} placement="top">
      <Modal.Header onClose={hide}>{name}</Modal.Header>
      <Modal.Body>
        <Flex direction="column">
          <img alt={name} className="PokemonModalImg" src={image} />
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
    </Modal>
  </div>
);

export default PokemonModal;
