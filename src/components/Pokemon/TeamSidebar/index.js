import React from 'react';
import { Page, Sidebar } from '@procore/core-react';

import TeamCreate from './TeamCreate';
import TeamSelect from './TeamSelect';

const TeamSidebar = () => (
  <Page.SidebarState>
    {({ isShowing, toggle }) => (
      <Page.Sidebar collapsed={!isShowing}>
        <Sidebar.Content collapsed={!isShowing}>
          <Sidebar.Panel>
            <Sidebar.ButtonList>
              <TeamCreate />
              <TeamSelect />
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
