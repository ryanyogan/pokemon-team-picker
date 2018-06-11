import React from 'react';
import { Button, Page, Sidebar } from '@procore/core-react';

import TeamSelect from './TeamSelect';

const TeamSidebar = ({ onTeamSelect }) => (
  <Page.SidebarState>
    {({ isShowing, toggle }) => (
      <Page.Sidebar collapsed={!isShowing}>
        <Sidebar.Content collapsed={!isShowing}>
          <Sidebar.Panel>
            <Sidebar.ButtonList>
              <Button variant="primary" size="block" disabled>
                Create Team
              </Button>
              <TeamSelect onTeamSelect={onTeamSelect} />
            </Sidebar.ButtonList>
            <Sidebar.Divider />
          </Sidebar.Panel>
          <Sidebar.Panel>
            <Sidebar.PanelTitle>
              <Sidebar.Header>Team's Pokemons</Sidebar.Header>
            </Sidebar.PanelTitle>
          </Sidebar.Panel>
        </Sidebar.Content>
        <Sidebar.FooterButton onClick={toggle} collapsed={!isShowing}>
          Collapse
        </Sidebar.FooterButton>
      </Page.Sidebar>
    )}
  </Page.SidebarState>
);

export default TeamSidebar;
