import React from 'react';
import { Button, Modal } from '@procore/core-react';

const TeamModal = ({ bodyText, buttonText, headerText }) => (
  <Modal.State>
    {({ isShowing, show, hide }) => (
      <div>
        <Button onClick={show} variant="primary" size="block">
          {buttonText}
        </Button>
        <Modal open={isShowing} onClickOverlay={hide}>
          <Modal.Header onClose={hide}>{headerText}</Modal.Header>
          <Modal.Body>{bodyText}</Modal.Body>
        </Modal>
      </div>
    )}
  </Modal.State>
);

export default TeamModal;
