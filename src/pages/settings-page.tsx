import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonRouterLink, IonButton } from '@ionic/react';

import { auth } from '../firebase.utils';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color={'medium'} expand='block'
          onClick={() => auth.signOut()}>
          Logout
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
