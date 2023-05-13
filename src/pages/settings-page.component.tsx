import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonRouterLink } from '@ionic/react';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        This is the settings page.
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
