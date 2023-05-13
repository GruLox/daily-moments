import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonRouterLink, IonButton } from '@ionic/react';
import { Redirect } from 'react-router';

type Props = {
  onLogin: () => void;
  loggedIn: boolean;
};

const LoginPage: React.FC<Props> = ({ onLogin, loggedIn }) => {
  if (loggedIn) {
    return <Redirect to='/my/entries' />
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton expand='block' onClick={onLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
