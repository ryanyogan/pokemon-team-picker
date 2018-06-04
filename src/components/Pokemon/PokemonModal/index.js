import React from 'react';
import { Flex, Modal, Button } from '@procore/core-react';

import './style.css';

const PokemonModal = ({ id, image, name }) => {
  console.log(id);
  return (
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
      )}
    </Modal.State>
  );
};

export default PokemonModal;
