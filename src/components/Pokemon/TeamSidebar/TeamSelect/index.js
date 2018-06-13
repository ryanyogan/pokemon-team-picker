import React from 'react';
import { Query } from 'react-apollo';
import { Button, List, Modal } from '@procore/core-react';

import { GET_TEAMS_QUERY } from '../../queries';

const handleOnClick = ({ hide, team, onTeamSelect }) => event => {
  hide();
  onTeamSelect(team);
};

const TeamSelection = ({ onTeamSelect, hide }) => (
  <Query query={GET_TEAMS_QUERY}>
    {({ data, loading, error }) => {
      const { allTeams } = data;
      if (allTeams) {
        return (
          <List>
            {allTeams.map(team => (
              <List.Item
                key={team.id}
                onClick={handleOnClick({ hide, onTeamSelect, team })}
              >
                {team.name}
              </List.Item>
            ))}
          </List>
        );
      }
      return <div>No Teams</div>;
    }}
  </Query>
);

const TeamSelect = ({ onTeamSelect }) => (
  <Modal.State>
    {({ isShowing, show, hide }) => (
      <div>
        <Button onClick={show} variant="primary" size="block">
          Select Team
        </Button>
        <Modal open={isShowing} onClickOverlay={hide}>
          <Modal.Header onClose={hide}>Select Team</Modal.Header>
          <Modal.Body>
            {isShowing && (
              <TeamSelection onTeamSelect={onTeamSelect} hide={hide} />
            )}
          </Modal.Body>
        </Modal>
      </div>
    )}
  </Modal.State>
);

export default TeamSelect;
