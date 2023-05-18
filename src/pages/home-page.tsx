import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonList, IonItem, IonFab, IonFabButton, IonIcon, IonLabel, IonThumbnail, IonImg } from '@ionic/react';

import { firestore } from '../firebase.utils';
import { useEffect, useState } from 'react';
import { add as addIcon } from 'ionicons/icons';

import { Entry, toEntry } from '../models';
import { useAuth } from '../auth.context';
import { formatDate } from '../date';


const HomePage: React.FC = () => {
  const { userId } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const entriesRef = firestore.collection('users').doc(userId).collection('entries');

    return entriesRef.orderBy('date', 'desc').limit(7)
      .onSnapshot(({ docs }) => setEntries(docs.map(toEntry)));
  }, [userId])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {entries.map((entry) =>
            <IonItem button key={entry.id} routerLink={`/my/entries/view/${entry.id}`}>
              <IonThumbnail slot='end'>
                <IonImg src={entry.pictureUrl} />
              </IonThumbnail>
              <IonLabel>
                <h2>{formatDate(entry.date)}</h2>
                <h3>{entry.title}</h3>
              </IonLabel>
            </IonItem>
          )}
        </IonList>
        <IonFab vertical='bottom' horizontal='end' className='ion-padding'>
          <IonFabButton routerLink='/my/entries/add'>
            <IonIcon icon={addIcon} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
