import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons'

import HomePage from './pages/home-page';
import SettingsPage from './pages/settings-page';
import EntryPage from './pages/entry-page';
import { useAuth } from './auth.context';


const AppTabs: React.FC = () => {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Redirect to='/login' />;
  }
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path='/my/entries'>
          <HomePage />
        </Route>
        <Route exact path='/my/entries/:id'>
          <EntryPage />
        </Route>
        <Route exact path='/my/settings'>
          <SettingsPage />
        </Route>
        <Redirect exact path='/' to='/my/entries' />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/my/entries">
          <IonIcon icon={homeIcon} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/my/settings">
          <IonIcon icon={settingsIcon} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default AppTabs;
