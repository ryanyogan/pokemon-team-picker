import React from 'react';
import { Flex, Modal, Button } from '@procore/core-react';

const PokemonModal = ({ name, image }) => (
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
        </Modal>
      </div>
    )}
  </Modal.State>
);

export default PokemonModal;
