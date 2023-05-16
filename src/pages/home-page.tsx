import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonList, IonItem } from '@ionic/react';

import { firestore } from '../firebase.utils';
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const entriesRef = firestore.collection('entries');
    entriesRef.get().then((snapshot) => {
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setEntries(entries);  
    })
  }, [])

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
            <IonItem button key={entry.id} routerLink={`/my/entries/${entry.id}`}>
              {entry.title}
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
