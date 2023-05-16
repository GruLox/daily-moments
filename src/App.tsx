import { Route, Redirect } from 'react-router-dom'

import { IonApp, IonLoading, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AuthContext, useAuthInit } from './auth.context';

import LoginPage from './pages/login-page';
import AppTabs from './App-tabs';
import NotFoundPage from './pages/not-found-page';

import RegisterPage from './pages/register-page';


const App: React.FC = () => {
  const { loading, auth } = useAuthInit();
  
  if (loading) {
    return <IonLoading isOpen />;
  }

  console.log('rendering App with auth:', auth);

  return (
    <IonApp>
      <AuthContext.Provider value={auth}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <Route exact path='/register'>
              <RegisterPage />
            </Route>
            <Route path='/my'>
              <AppTabs />
            </Route>
            <Redirect exact path='/' to='/my/entries' />
            <Route>
              <NotFoundPage />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
