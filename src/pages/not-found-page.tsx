import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonRouterLink } from '@ionic/react';

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        Page not found.
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
