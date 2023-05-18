import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/react';
import { trash as trashIcon } from 'ionicons/icons';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { firestore } from '../firebase.utils';

import { Entry, toEntry } from '../models';
import { useAuth } from '../auth.context';
import { formatDate } from '../date';

type RouteParams = {
  id: string;
}

const EntryPage: React.FC = () => {
  const { userId } = useAuth();
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [entry, setEntry] = useState<Entry>();

  useEffect(() => {
    const entryRef = firestore.collection('users').doc(userId).collection('entries').doc(id);
    entryRef.get().then(doc => setEntry(toEntry(doc)));
  }, [userId, id]);

  const handleDelete = async () => {
    const entryRef = firestore.collection('users').doc(userId).collection('entries').doc(id);
    await entryRef.delete();
    history.goBack();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{formatDate(entry?.date)}</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleDelete}>
              <IonIcon icon={trashIcon} slot='icon-only' />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>{entry?.title}</h2>
        <img src={entry?.pictureUrl} alt={entry?.title} />
        <p>{entry?.description}</p>
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
