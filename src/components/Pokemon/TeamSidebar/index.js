import React from 'react';
import { Button, Page, Sidebar } from '@procore/core-react';

const TeamSidebar = () => (
  <Page.SidebarState>
    {({ isShowing, toggle }) => (
      <Page.Sidebar collapsed={!isShowing}>
        <Sidebar.Content collapsed={!isShowing}>
          <Sidebar.Panel>
            <Sidebar.ButtonList>
              <Button variant="primary" size="block">
                + Select Team
              </Button>
              <Button variant="primary" size="block">
                + Create Team
              </Button>
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
